import React from 'react';
import { LogIn, CheckCircle, Trophy, UserPlus } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: LogIn,
      title: 'Join With Google',
      description: 'Connect using your google account to get started with the airdrop',
      color: 'from-[#FFD700] to-[#FFD700]/80'
    },
    {
      icon: CheckCircle,
      title: 'Complete Tasks',
      description: 'Complete easy 5 task and submit your wallet to get rewards',
      color: 'from-[#00C2FF] to-[#00C2FF]/80'
    },
    {
      icon: Trophy,
      title: 'Earn Points',
      description: 'Get 1000 points per task completed and track your progress',
      color: 'from-[#FFD700] to-[#00C2FF]'
    },
    {
      icon: UserPlus,
      title: 'Invite Friends',
      description: 'Earn 200 bonus points for each friend you refer to climb the leaderboard',
      color: 'from-[#00C2FF] to-[#FFD700]'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#0E0E12] to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How to <span className="text-[#FFD700]">Participate</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow these simple steps to join the airdrop and start earning LES tokens
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-gray-600 to-transparent z-0"></div>
                )}

                <div className="relative z-10 group">
                  <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FFD700] to-[#00C2FF] flex items-center justify-center text-black font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${step.color} mb-6 mt-4`}>
                      <Icon size={32} className="text-black" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('tasks')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#FFD700] to-[#00C2FF] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;