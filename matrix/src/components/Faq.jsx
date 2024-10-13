import React from 'react';

const Faq = () => {
    return (
        <div className='bg-[#00161D]'>
            {/* FAQ Section */}
            <div className='flex flex-col lg:flex-row h-auto lg:h-[551px] max-w-[1200px] pt-[50px] lg:pt-[100px] px-[20px] lg:pl-[141px] lg:pr-[108px] pb-[50px] lg:pb-[120px] gap-[20px] lg:gap-[60px] mx-auto'>
                <div>
                    <h1 className='text-[28px] lg:text-[40px] text-white font-[500px] w-full lg:w-[385px] h-auto lg:h-[88px] pt-[20px] pb-[20px]'>
                        Frequently Asked Questions
                    </h1>
                </div>

                {/* Right Section */}
                <div className="bg-[#00161D] p-6 rounded-md w-full lg:max-w-lg mx-auto text-white">
                    {/* Questions */}
                    {[
                        "What is EthAi?",
                        "How can EthAi help me as a Trader?",
                        "Who can use EthAi?",
                        "How does EthAi track smart money flow?",
                        "How does EthAi ensure data security?"
                    ].map((question, index) => (
                        <div key={index} className="pt-[20px] pb-[20px] pl-[20px] lg:pl-[40px] w-full lg:w-[674px] h-auto lg:h-[64px]">
                            <div className="flex gap-[10px] lg:gap-[20px] items-center w-full text-left text-lg">
                                <span className="text-teal-400 text-xl">+</span>
                                <span className='text-[14px] lg:text-[16px] font-[400px]'>{question}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* dApp Section */}
            <div className='pb-[50px] lg:pb-[150px]'>
                <div className="w-full lg:w-[960px] h-auto lg:h-[382px] rounded-[20px] py-[40px] lg:py-[56px] px-[20px] lg:px-[156px] shadow-[inset_0px_0px_32px_16px_rgba(99,242,255,0.1)] mx-auto flex flex-col items-center gap-[20px] lg:gap-[32px]">
                    <h1 className="text-[28px] lg:text-[40px] font-[500] text-center text-white">
                        Explore Our <span className="text-[#62F0FE]">dApp</span>
                    </h1>
                    <p className='w-full lg:w-[703px] h-auto font-[400] text-[14px] lg:text-[16px] text-[#B0FAFF] text-center lg:text-justify'>
                        EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
                    </p>
                    <button className='w-[140px] h-[44px] bg-[#CDFCFF] text-black rounded-[12px] shadow-[inset_0px_0px_1px_1px_rgba(76,221,253,1)] text-[16px] font-[500]'>
                        Open dApp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Faq;
