import React from 'react';
import { Twitter, MessageCircle, Send, BookOpen, ExternalLink } from 'lucide-react';

const Community: React.FC = () => {
  const socialLinks = [
    {
      icon: Twitter,
      name: 'Twitter',
      description: 'Follow us for updates and announcements',
      followers: '25.2K',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-400 hover:to-blue-500'
    },
    {
      icon: MessageCircle,
      name: 'Telegram Group',
      description: 'Join our community discussions',
      followers: '18.5K',
      color: 'from-blue-400 to-blue-500',
      hoverColor: 'hover:from-blue-300 hover:to-blue-400'
    },
    {
      icon: Send,
      name: 'Telegram Channel',
      description: 'Get official announcements',
      followers: '32.1K',
      color: 'from-[#00C2FF] to-blue-500',
      hoverColor: 'hover:from-[#00C2FF]/80 hover:to-blue-400'
    },
    {
      icon: BookOpen,
      name: 'Medium',
      description: 'Read our latest articles and insights',
      followers: '8.3K',
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:from-gray-500 hover:to-gray-600'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-gray-900 to-[#0E0E12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our <span className="text-[#FFD700]">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fellow participants, get updates, and never miss important announcements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${social.color} ${social.hoverColor} transition-all duration-300 mb-4`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {social.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-3 text-sm">
                    {social.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-[#FFD700]">
                    <span className="font-semibold">{social.followers}</span>
                    <span className="text-gray-400 text-sm">followers</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Community Stats</h3>
            <p className="text-gray-300">Growing stronger every day</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-1">84K+</div>
              <div className="text-gray-300 text-sm">Total Members</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00C2FF] mb-1">150+</div>
              <div className="text-gray-300 text-sm">Countries</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD700] mb-1">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00C2FF] mb-1">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;