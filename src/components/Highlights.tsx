import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, CheckSquare, Users } from 'lucide-react';

const Highlights: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      icon: DollarSign,
      title: 'Total Airdrop Pool',
      value: '$100,000',
      subtitle: 'worth of LES tokens',
      color: 'from-[#FFD700] to-[#FFD700]/80'
    },
    {
      icon: Clock,
      title: 'Airdrop Ends In',
      value: `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`,
      subtitle: `${timeLeft.seconds}s remaining`,
      color: 'from-[#00C2FF] to-[#00C2FF]/80'
    },
    {
      icon: CheckSquare,
      title: 'Tasks to Complete',
      value: '5',
      subtitle: 'simple social/Web3 actions',
      color: 'from-[#FFD700] to-[#00C2FF]'
    },
    {
      icon: Users,
      title: 'Referral Bonus',
      value: '200',
      subtitle: 'points per friend invited',
      color: 'from-[#00C2FF] to-[#FFD700]'
    }
  ];

  return (
    <section className="py-20 bg-[#0E0E12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Airdrop <span className="text-[#FFD700]">Highlights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't miss out on this incredible opportunity to earn LES tokens
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${highlight.color} mb-4`}>
                    <Icon size={32} className="text-black" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">
                    {highlight.title}
                  </h3>
                  
                  <div className="text-3xl font-bold text-white mb-2">
                    {highlight.value}
                  </div>
                  
                  <p className="text-sm text-gray-400">
                    {highlight.subtitle}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${highlight.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;