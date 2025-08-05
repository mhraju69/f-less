import React from 'react';
import { ArrowRight, Coins, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToTasks = () => {
    const element = document.getElementById('tasks');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-[#0E0E12] pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="text-4xl font-bold text-[#FFD700]">LES</div>
              <div className="h-8 w-px bg-gray-600"></div>
              <div className="text-gray-400">Airdrop Campaign</div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                {/* Join the{' '} */}
                <span className="bg-gradient-to-r from-[#FFD700] to-[#00C2FF] bg-clip-text text-transparent">
                  Liquidity Earn Starter (LES)
                </span>{' '}
                – Easy way to provide liquid and earn!
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Complete tasks, invite friends, and win a share of the{' '}
                <span className="text-[#FFD700] font-semibold">$20,00,000</span> airdrop.
                Your Web3 journey starts now!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToTasks}
                className="group bg-gradient-to-r from-[#FFD700] to-[#00C2FF] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Join Airdrop Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </button>
              
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#00C2FF] hover:text-[#00C2FF] transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <Coins className="mx-auto mb-2 text-[#FFD700]" size={24} />
                <div className="text-2xl font-bold text-white">$100K</div>
                <div className="text-sm text-gray-400">Prize Pool</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <Zap className="mx-auto mb-2 text-[#00C2FF]" size={24} />
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-sm text-gray-400">Simple Tasks</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <Users className="mx-auto mb-2 text-[#FFD700]" size={24} />
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Participants</div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#00C2FF]/20 backdrop-blur-sm border border-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#FFD700] to-[#00C2FF] flex items-center justify-center animate-pulse">
                      <Coins size={64} className="text-black" />
                    </div>
                    
                    {/* Floating tokens animation */}
                    <div className="absolute -top-8 -left-8 w-8 h-8 rounded-full bg-[#FFD700] animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute -top-4 -right-12 w-6 h-6 rounded-full bg-[#00C2FF] animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -bottom-6 -left-12 w-10 h-10 rounded-full bg-[#FFD700] animate-bounce" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute -bottom-8 -right-8 w-7 h-7 rounded-full bg-[#00C2FF] animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Web3 Rewards</h3>
                  <p className="text-gray-300">Earn LES tokens through community participation</p>
                </div>
              </div>
            </div>
            
            {/* Background glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFD700]/10 to-[#00C2FF]/10 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;