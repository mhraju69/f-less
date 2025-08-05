import React from 'react';
import { Twitter, MessageCircle, Send, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0E12] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl font-bold text-[#FFD700]">LES</div>
              <div className="text-gray-400">Airdrop</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Join the future of Web3 with LES. Complete simple tasks, earn rewards, 
              and be part of our growing community.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                <Twitter size={20} className="text-[#00C2FF]" />
              </div>
              <div className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                <MessageCircle size={20} className="text-[#00C2FF]" />
              </div>
              <div className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                <Send size={20} className="text-[#00C2FF]" />
              </div>
              <div className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                <BookOpen size={20} className="text-[#00C2FF]" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('leaderboard')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                >
                  Leaderboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                >
                  Community
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Built for the Web3 Future © LES {currentYear}
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-400">
                Powered by blockchain technology
              </div>
              <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;