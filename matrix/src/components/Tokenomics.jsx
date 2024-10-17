import React from 'react';

import blu from "../assets/blu.mov"
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


const Tokenomics = () => {
  const data = {
    labels: ["Liquidity Pool", "Team", "Marketing"],
    datasets: [
      {
        label: "Allocation",
        data: [35, 90, 5],
        backgroundColor: [ "#1e3a8a","#4fd1c5", "#0f172a"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: "60%", 
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };
  return (
    <div className="relative bg-[#00161D] py-[24px] text-center overflow-hidden">
    
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src={blu}
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute top-0 left-0 w-full h-full z-10" style={{ background: 'linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 50%, #00161D 100%)' }}></div>
      <h1 className='md:w-[703px] md:h-[44px] text-white mx-auto md:font-[500] text-[30px] md:text-[40px]'>
        Tokenomics
      </h1>
      <div className='relative flex flex-col md:flex-row md:w-[1280px] md:h-[522px] justify-between gap-[44px] mx-auto mt-12'>
        
      <div className='flex justify-center mx-auto items-center p-4'>
    <div className="w-[192px] h-[192px]">
      <Doughnut data={data} options={options} />
    </div>
  </div>

        <div className='w-[335px] md:w-[538px] mx-auto'>
          <div className="bg-[#0C2B2FB2] opacity-70 text-white rounded-lg p-6 w-full h-[324px] md:h-[324px]">
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-[20px] font-[400]">Name:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">EthAi</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-[20px] font-[400]">Token Name:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">$EthAi</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-[20px] font-[400]">Token standard:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">ERC20</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-lg">Blockchain:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">Ethereum</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-[20px] font-[400]">Total Supply:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">100 Million</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-[20px] font-[400]">Tax:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">5%/5%</span>
            </div>
          </div>

          {/* next */}
          <div className="bg-[#0C2B2FB2] opacity-70 text-white rounded-lg p-6 w-full h-[174px] mt-[14px]">
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-[20px] font-[400]">Team:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">35%</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-[20px] font-[400]">Marketing:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">5%</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="text-[16px] md:text-[20px] font-[400]">Liquidity Pool:</span>
              <span className="text-[16px] md:text-[20px] font-[400]">90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
