'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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

export default function HobbiesPage() {
  const [activities, setActivities] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuth = async () => {
      setLoading(true);
      try {
        // Check for authorization code in URL
        const code = searchParams.get('code');
        if (code) {
          await exchangeAuthorizationCode(code);
          window.history.replaceState({}, document.title, window.location.pathname);
        }

        if (isAuthenticated()) {
          // Fetch athlete activities
          const activitiesData = await getAthleteActivities();
          setActivities(activitiesData);

          // Fetch athlete stats
          const statsData = await getAthleteStats();
          setStats(statsData);
        }
      } catch (err) {
        console.error('Error fetching Strava data:', err);
        setError('Failed to load Strava data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    handleAuth();
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
