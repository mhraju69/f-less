import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E12]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#FFD700]">LES</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('leaderboard')}
              className="text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
            >
              Leaderboard
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
            >
              Community
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('tasks')}
              className="bg-gradient-to-r from-[#FFD700] to-[#00C2FF] text-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#FFD700]/25 transition-all duration-300 transform hover:scale-105"
            >
              Join Airdrop
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-[#00C2FF] p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0E0E12]/95 backdrop-blur-md border-t border-gray-800">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('leaderboard')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
              >
                Leaderboard
              </button>
              <button
                onClick={() => scrollToSection('community')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#00C2FF] transition-colors duration-200"
              >
                Community
              </button>
              <button
                onClick={() => scrollToSection('tasks')}
                className="block w-full mt-4 bg-gradient-to-r from-[#FFD700] to-[#00C2FF] text-black px-6 py-2 rounded-lg font-semibold"
              >
                Join Airdrop
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;