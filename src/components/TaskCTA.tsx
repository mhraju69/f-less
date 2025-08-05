import React, { useState } from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
// import AirdropPage from './AirdropPage.jsx'
import { useNavigate } from 'react-router';

const TaskCTA: React.FC = () => {

  // const [render, setRender] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="tasks" className="py-20 bg-gradient-to-r from-gray-900 via-[#0E0E12] to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-[#00C2FF]/5 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD700]/10 to-transparent rounded-3xl"></div>
          
          <div className="relative z-10 text-center py-20 px-8">
            <div className="mb-8">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#00C2FF] mb-6">
                <Rocket size={48} className="text-black" />
              </div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-[#FFD700] to-[#00C2FF] bg-clip-text text-transparent">Launch</span>?
            </h2>

            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your LES journey begins now! Complete simple tasks, earn points, and claim your share of the $100K airdrop.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button onClick={()=> navigate('/airdrop/auth')} className="group bg-gradient-to-r from-[#FFD700] to-[#00C2FF] text-black px-12 py-6 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-[#FFD700]/40 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Tasks & Claim Points
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </button>
              
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD700] to-[#00C2FF] border-2 border-[#0E0E12]"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#FFD700] border-2 border-[#0E0E12]"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD700] to-[#00C2FF] border-2 border-[#0E0E12]"></div>
                </div>
                <div>
                  <div className="font-semibold">10,000+ participants</div>
                  <div className="text-sm">already earning rewards</div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">5 min</div>
                <div className="text-gray-300">Average completion time</div>
              </div>
              
              <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                <div className="text-3xl font-bold text-[#00C2FF] mb-2">100%</div>
                <div className="text-gray-300">Success rate for participants</div>
              </div>
              
              <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">24/7</div>
                <div className="text-gray-300">Support available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* {render? (
      <AirdropPage/>
    ):(
      <></>
    )} */}
    </section>
  );
};

export default TaskCTA;