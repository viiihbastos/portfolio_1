'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
// Import static data
import staticStravaData from './data/strava-data.json';
// Keep the service imports for optional live data
import { 
  getAuthorizationUrl, 
  exchangeAuthorizationCode,
  getAthleteActivities,
  getAthleteStats,
  formatDistance,
  formatTime,
  formatDate,
  isAuthenticated
} from './services/strava-service';

// Types
interface Activity {
  id: number;
  name: string;
  type: string;
  distance: number;
  moving_time: number;
  start_date: string;
}

interface Stats {
  recent_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  recent_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  all_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  all_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
}

// Sample data for demo purposes
const sampleActivities = [
  {
    id: 1,
    name: "Morning Run",
    type: "Run",
    distance: 5000,
    moving_time: 1800,
    start_date: "2025-06-21T08:30:00Z"
  },
  {
    id: 2,
    name: "Evening Cycling",
    type: "Ride",
    distance: 15000,
    moving_time: 3600,
    start_date: "2025-06-20T18:00:00Z"
  },
  {
    id: 3,
    name: "Trail Run",
    type: "Run",
    distance: 8000,
    moving_time: 2700,
    start_date: "2025-06-19T16:30:00Z"
  },
  {
    id: 4,
    name: "Mountain Biking",
    type: "Ride",
    distance: 20000,
    moving_time: 5400,
    start_date: "2025-06-18T09:00:00Z"
  }
];

const sampleStats = {
  recent_run_totals: {
    count: 5,
    distance: 25000,
    moving_time: 7200,
    elapsed_time: 8000,
    elevation_gain: 250
  },
  recent_ride_totals: {
    count: 3,
    distance: 50000,
    moving_time: 9000,
    elapsed_time: 10000,
    elevation_gain: 500
  },
  all_run_totals: {
    count: 120,
    distance: 800000,
    moving_time: 240000,
    elapsed_time: 260000,
    elevation_gain: 8000
  },
  all_ride_totals: {
    count: 85,
    distance: 2500000,
    moving_time: 360000,
    elapsed_time: 380000,
    elevation_gain: 15000
  }
};

export default function HobbiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLiveData, setIsLiveData] = useState(false);
  const [showLiveOption, setShowLiveOption] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Check for authorization code in URL
        const code = searchParams.get('code');
        if (code) {
          await exchangeAuthorizationCode(code);
          window.history.replaceState({}, document.title, window.location.pathname);
          setIsLiveData(true);
        }

        // First option: Use authenticated session if available
        if (isAuthenticated()) {
          try {
            // Fetch athlete activities
            const activitiesData = await getAthleteActivities();
            setActivities(activitiesData);

            // Fetch athlete stats
            const statsData = await getAthleteStats();
            setStats(statsData);
            setIsLiveData(true);
            setShowLiveOption(true);
            console.log('Using live Strava data');
          } catch (liveError) {
            console.error('Error fetching live Strava data:', liveError);
            // Fall back to static data on error
            setActivities(staticStravaData.activities);
            setStats(staticStravaData.stats);
            setIsLiveData(false);
          }
        } else {
          // Second option: Use static data
          console.log('Using static Strava data');
          setActivities(staticStravaData.activities);
          setStats(staticStravaData.stats);
          setIsLiveData(false);
          // Show live option if there's static data
          setShowLiveOption(true);
        }
      } catch (err) {
        console.error('Error in Strava data handling:', err);
        setError('Failed to load Strava data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [searchParams]);

  const handleConnectStrava = () => {
    window.location.href = getAuthorizationUrl();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Hobbies</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="mb-8 text-center text-lg">
          I enjoy staying active through various physical activities. Check out some of my recent workouts and statistics from Strava below!
        </p>

        {!isAuthenticated() ? (
          <div className="text-center py-10">
            <p className="mb-4">Connect with Strava to see my recent activities and statistics</p>
            <button
              onClick={handleConnectStrava}
              className="bg-[#FC4C02] hover:bg-[#e34402] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Connect with Strava
            </button>
          </div>
        ) : loading ? (
          <div className="text-center py-10">
            <p>Loading Strava data...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Recent Activities */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {activities.slice(0, 6).map((activity) => (
                  <div key={activity.id} className="bg-white/5 p-6 rounded-lg border border-neutral-800">
                    <h3 className="font-medium text-xl mb-2">{activity.name}</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Type: {activity.type}</p>
                      <p>Date: {formatDate(activity.start_date)}</p>
                      <p>Distance: {formatDistance(activity.distance)}</p>
                      <p>Time: {formatTime(activity.moving_time)}</p>
                    </div>
                  </div>
                ))}
                {activities.length === 0 && (
                  <p className="col-span-2 text-center py-4">No recent activities found</p>
                )}
              </div>
            </section>

            {/* Statistics */}
            {stats && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Recent Stats (4 weeks) */}
                  <div className="bg-white/5 p-6 rounded-lg border border-neutral-800">
                    <h3 className="font-medium text-xl mb-4">Last 4 Weeks</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-400">Activities</p>
                        <p className="text-xl font-medium">{stats.recent_run_totals?.count || 0} runs, {stats.recent_ride_totals?.count || 0} rides</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Distance</p>
                        <p className="text-xl font-medium">
                          {formatDistance(
                            (stats.recent_run_totals?.distance || 0) +
                            (stats.recent_ride_totals?.distance || 0)
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Time</p>
                        <p className="text-xl font-medium">
                          {formatTime(
                            (stats.recent_run_totals?.moving_time || 0) +
                            (stats.recent_ride_totals?.moving_time || 0)
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* All-Time Stats */}
                  <div className="bg-white/5 p-6 rounded-lg border border-neutral-800">
                    <h3 className="font-medium text-xl mb-4">All Time</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-400">Activities</p>
                        <p className="text-xl font-medium">{stats.all_run_totals?.count || 0} runs, {stats.all_ride_totals?.count || 0} rides</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Distance</p>
                        <p className="text-xl font-medium">
                          {formatDistance(
                            (stats.all_run_totals?.distance || 0) +
                            (stats.all_ride_totals?.distance || 0)
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Elevation Gain</p>
                        <p className="text-xl font-medium">
                          {Math.round(
                            (stats.all_run_totals?.elevation_gain || 0) +
                            (stats.all_ride_totals?.elevation_gain || 0)
                          )} m
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
