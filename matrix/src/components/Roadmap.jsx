import React from 'react'
import build from "../assets/build.png"
import preview from "../assets/preview.png"
import crp from "../assets/crp.png"
const Roadmap = () => {
  return (
    <div className="bg-[#00161D] text-white pt-[64px] pb-[64px] h-auto">
        <h1 className='text-white text-center font-[500px] text-[40px]'>Roadmap</h1>
       

     
      <div className="flex justify-between  mt-[64px]">  
      <div className='mx-[120px] pr-[56px] pl-[56px]'>
        <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-[500] mb-4 w-[71px] h-[28px]">
            Phase 1
          </button>
          <h1 className="text-[40px] font-[500px] font-sans mb-6">Kicking Off</h1>
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

        {/* Right Section: Background Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={build}
            alt="Phase Background"
            className="w-[512px] h-[512px] mr-[0] pr-[0]"
          />
        </div>
      </div>

      {/* phase2 */}
      <div className="flex justify-between  mt-[64px]">  
         {/* Right Section: Background Image */}
         <div className="rounded-lg overflow-hidden">
          <img
            src={preview}
            alt="Phase Background"
            className="w-[512px] h-[512px] mr-[0] pr-[0]"
          />
        </div>
      <div className='mx-[120px] pr-[56px] pl-[56px]'>
        <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-[500] mb-4 w-[71px] h-[28px]">
            Phase 2
          </button>
          <h1 className="text-[40px] font-[500px] font-sans mb-6">Bigger Insights</h1>
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

       {/* phase3 */}
       <div className="flex justify-between  mt-[64px]">  
        
      <div className='mx-[120px] pr-[56px] pl-[56px]'>
        <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-[500] mb-4 w-[71px] h-[28px]">
            Phase 3
          </button>
          <h1 className="text-[40px] font-[500px] font-sans mb-6">Full Power</h1>
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
              Launch of Community-Driven Initiatives
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Continuous Improvement and Updates
            </li>
          </ul>
        </div>
         {/* Right Section: Background Image */}
         <div className="rounded-lg overflow-hidden">
          <img
            src={crp}
            alt="Phase Background"
            className="w-[512px] h-[512px] mr-[0] pr-[0]"
          />
        </div>

       
      </div>

      
    </div>
  )
}

export default Roadmap
