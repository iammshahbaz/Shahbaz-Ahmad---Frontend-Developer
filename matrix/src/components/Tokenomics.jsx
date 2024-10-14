import React from 'react';
import donut from "../assets/Donut.png";

const Tokenomics = () => {
  return (
    <div className='bg-[#00161D] py-[24px] text-center'>
      <h1 className='md:w-[703px] md:h-[44px] text-white mx-auto md:font-[500] text-[30px] md:text-[40px]'>
        Tokenomics
      </h1>
      <div className='flex flex-col md:flex-row md:w-[1280px] md:h-[522px] justify-between gap-[44px] mx-auto mt-12'>
        
        <div className='text-center mx-auto p-4'>
          <img 
            src={donut} 
            alt="Tokenomics Donut Chart" 
            className='w-[192px] h-[192px] mx-auto md:w-[478px] md:h-[385px]' 
          />
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

          {/* Next */}
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
