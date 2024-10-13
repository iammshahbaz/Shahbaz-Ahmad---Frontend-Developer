import React from 'react';
import build from "../assets/build.png";
import preview from "../assets/preview.png";
import crp from "../assets/crp.png";

const Roadmap = () => {
  return (
    <div className="bg-[#00161D] text-white pt-[64px] pb-[64px] h-auto">
      <h1 className="text-white text-center font-[400] text-[40px]">Roadmap</h1>

      {/* Phase 1 */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-[64px] px-4 md:px-0">
        {/* Phase 1 Text */}
        <div className="md:mx-[120px] md:pr-[56px] md:pl-[56px] w-full md:w-1/2">
          <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-medium mb-4 w-[71px] h-[28px]">
            Phase 1
          </button>
          <h1 className="text-[32px] md:text-[40px] font-[500] mb-6">Kicking Off</h1>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Launch of EthAi: Officially
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Development of Core AI Agents
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              User Onboarding Campaign
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Community Engagement Initiatives
            </li>
          </ul>
        </div>

        {/* Phase 1 Image */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src={build}
            alt="Phase Background"
            className="w-full h-[300px] md:h-[512px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Phase 2 */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[64px] px-4 md:px-0">
        {/* Phase 2 Image */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src={preview}
            alt="Phase Background"
            className="w-full h-[300px] md:h-[512px] object-cover rounded-lg"
          />
        </div>

        {/* Phase 2 Text */}
        <div className="md:mx-[120px] md:pr-[56px] md:pl-[56px] w-full md:w-1/2">
          <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-medium mb-4 w-[71px] h-[28px]">
            Phase 2
          </button>
          <h1 className="text-[32px] md:text-[40px] font-[500] mb-6">Bigger Insights</h1>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Introduction of Advanced AI Agents
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Strategic Partnerships
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              User Interface Optimization
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Comprehensive Marketing Campaign
            </li>
          </ul>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-[64px] px-4 md:px-0">
        {/* Phase 3 Text */}
        <div className="md:mx-[120px] md:pr-[56px] md:pl-[56px] w-full md:w-1/2">
          <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-medium mb-4 w-[71px] h-[28px]">
            Phase 3
          </button>
          <h1 className="text-[32px] md:text-[40px] font-[500] mb-6">Full Power</h1>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Introduction of Enhanced Features
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              API Integration for Data Access
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              EthAi Advanced Learning Module
            </li>
          </ul>
        </div>

        {/* Phase 3 Image */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src={crp}
            alt="Phase Background"
            className="w-full h-[300px] md:h-[512px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
