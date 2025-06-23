// Strava API service

// Strava API constants - these should be stored in environment variables in a production app
const CLIENT_ID = '165622';
const CLIENT_SECRET = 'ba826640782efd86b910d33434ba4c6a5f9b1b6c';
const REDIRECT_URI = 'https://victorbastos.vercel.app/hobbies';
const SCOPE = 'read';

// Token storage keys
const TOKEN_STORAGE_KEY = 'strava_tokens';

// Types
interface StravaTokens {
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  type: string;
  sport_type: string;
  start_date: string;
  start_date_local: string;
  timezone: string;
  total_elevation_gain: number;
  map?: {
    summary_polyline: string;
  };
}

interface StravaTotals {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
}

interface StravaStats {
  recent_ride_totals: StravaTotals;
  recent_run_totals: StravaTotals;
  all_ride_totals: StravaTotals;
  all_run_totals: StravaTotals;
}

// Generate Strava authorization URL
export const getAuthorizationUrl = (): string => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPE,
  });
  
  return `https://www.strava.com/oauth/authorize?${params.toString()}`;
};

// Check if user is authenticated with Strava
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const tokensString = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!tokensString) return false;
    
    const tokens = JSON.parse(tokensString) as StravaTokens;
    // Return true if tokens exist and not expired
    return !!tokens && tokens.expires_at > Math.floor(Date.now() / 1000);
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
};

// Exchange authorization code for tokens
export const exchangeAuthorizationCode = async (code: string): Promise<void> => {
  try {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to exchange authorization code');
    }

    const data = await response.json();
    
    // Save tokens to local storage
    const tokens: StravaTokens = {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: data.expires_at,
    };
    
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokens));
  } catch (error) {
    console.error('Error exchanging authorization code:', error);
    throw error;
  }
};

// Get a valid access token (refresh if necessary)
export const getValidAccessToken = async (): Promise<string> => {
  if (typeof window === 'undefined') return '';
  
  try {
    const tokensString = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!tokensString) throw new Error('No tokens found');
    
    const tokens = JSON.parse(tokensString) as StravaTokens;
    
    // If token is expired, refresh it
    if (tokens.expires_at <= Math.floor(Date.now() / 1000)) {
      const response = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          refresh_token: tokens.refresh_token,
          grant_type: 'refresh_token',
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to refresh token');
      }

      const data = await response.json();
      
      // Update tokens in local storage
      const newTokens: StravaTokens = {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: data.expires_at,
      };
      
      localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(newTokens));
      return newTokens.access_token;
    }
    
    return tokens.access_token;
  } catch (error) {
    console.error('Error getting valid access token:', error);
    throw error;
  }
};

// Get athlete's activities
export const getAthleteActivities = async (limit = 10): Promise<StravaActivity[]> => {
  try {
    const accessToken = await getValidAccessToken();
    
    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?per_page=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch activities');
    }

    const data = await response.json();
    return data as StravaActivity[];
  } catch (error) {
    console.error('Error fetching athlete activities:', error);
    throw error;
  }
};

// Get athlete's stats
export const getAthleteStats = async (): Promise<StravaStats> => {
  try {
    const accessToken = await getValidAccessToken();
    
    // Need to get athlete ID first
    const profileResponse = await fetch('https://www.strava.com/api/v3/athlete', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!profileResponse.ok) {
      const error = await profileResponse.json();
      throw new Error(error.message || 'Failed to fetch athlete profile');
    }

    const profile = await profileResponse.json();
    const athleteId = profile.id;
    
    // Now get stats using athlete ID
    const statsResponse = await fetch(
      `https://www.strava.com/api/v3/athletes/${athleteId}/stats`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!statsResponse.ok) {
      const error = await statsResponse.json();
      throw new Error(error.message || 'Failed to fetch athlete stats');
    }

    const data = await statsResponse.json();
    return data as StravaStats;
  } catch (error) {
    console.error('Error fetching athlete stats:', error);
    throw error;
  }
};

// Utility functions for formatting
export const formatDistance = (meters: number): string => {
  const km = meters / 1000;
  return `${km.toFixed(1)} km`;
};

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  
  return `${minutes} min`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};
