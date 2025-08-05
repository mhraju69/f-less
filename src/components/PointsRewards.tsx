import React from 'react';
import { Star, Gift, TrendingUp } from 'lucide-react';

const PointsRewards: React.FC = () => {
  const leaderboard = [
    { rank: 1, username: 'CryptoKing99', points: 15750, badge: '👑' },
    { rank: 2, username: 'Web3Warrior', points: 14200, badge: '🥈' },
    { rank: 3, username: 'DefiMaster', points: 13850, badge: '🥉' },
    { rank: 4, username: 'TokenHunter', points: 12900, badge: '🏅' },
    { rank: 5, username: 'AirdropPro', points: 11600, badge: '⭐' }
  ];

  return (
    <section id="leaderboard" className="py-20 bg-[#0E0E12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Earn <span className="bg-gradient-to-r from-[#FFD700] to-[#00C2FF] bg-clip-text text-transparent">Points</span>. Win <span className="bg-gradient-to-r from-[#00C2FF] to-[#FFD700] bg-clip-text text-transparent">Tokens</span>.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete tasks and invite friends to climb the leaderboard and maximize your rewards
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Point System */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">Point System</h3>
            
            <div className="space-y-4">
              <div className="flex items-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-[#FFD700]/50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFD700]/80 flex items-center justify-center">
                    <Star size={24} className="text-black" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold text-white">1000 points</div>
                  <div className="text-gray-300">per completed task</div>
                </div>
              </div>

              <div className="flex items-center p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-[#00C2FF]/50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#00C2FF]/80 flex items-center justify-center">
                    <Gift size={24} className="text-black" />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold text-white">200 points</div>
                  <div className="text-gray-300">per successful referral</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[#FFD700]/10 to-[#00C2FF]/10 border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-2">Bonus Multipliers</h4>
              <p className="text-gray-300">
                Early participants get 2x points for the first 48 hours! Complete tasks quickly to maximize your rewards.
              </p>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-white">Leaderboard</h3>
              <TrendingUp className="text-[#00C2FF]" size={32} />
            </div>

            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:transform hover:scale-[1.02] ${
                    user.rank === 1
                      ? 'bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 border-[#FFD700]/50'
                      : user.rank <= 3
                      ? 'bg-gradient-to-r from-[#00C2FF]/20 to-[#00C2FF]/10 border-[#00C2FF]/50'
                      : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{user.badge}</div>
                    <div>
                      <div className="font-bold text-white">{user.username}</div>
                      <div className="text-sm text-gray-400">Rank #{user.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white text-lg">
                      {user.points.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">points</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-500 transition-all duration-300">
              View Full Leaderboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointsRewards;