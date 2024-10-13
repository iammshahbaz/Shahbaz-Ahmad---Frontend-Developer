import React from 'react'

const Faq = () => {
    return (
        <div className='bg-[#00161D]'>

            <div className='flex h-[551px] max-w-[1200px] pt-[100px] pl-[141px] pr-[108px] pb-[120px] gap-[60px] mx-auto'>
                <div>
                    <h1 className='text-[40px] text-white font-[500px] w-[385px] h-[88px] pt-[20px] pb-[20px]'>Frequently Asked Questions</h1>
                </div>

                {/* right */}
                <div className="bg-[#00161D] p-6 rounded-md max-w-lg mx-auto text-white">

                    <div className="pt-[20px] pb-[20px] pl-[40px] w-[674px] h-[64px]">
                        <div className="flex gap-[20px] items-center w-full text-left text-lg">
                            <span className="text-teal-400 text-xl">+</span>
                            <span className='text-[16px] font-[400px]'>What is EthAi?</span>
                        </div>

                    </div>

                    <div className="pt-[20px] pb-[20px] pl-[40px] w-[674px] h-[64px]">
                        <div className="flex gap-[20px] items-center w-full text-left text-lg">
                            <span className="text-teal-400 text-xl">+</span>
                            <span className='text-[16px] font-[400px]'>How can EthAi help me as a Trader?</span>
                        </div>

                    </div>

                    <div className="pt-[20px] pb-[20px] pl-[40px] w-[674px] h-[64px]">
                        <div className="flex gap-[20px] items-center w-full text-left text-lg">
                            <span className="text-teal-400 text-xl">+</span>
                            <span className='text-[16px] font-[400px]'>Who can use EthAi?</span>
                        </div>

                    </div>

                    <div className="pt-[20px] pb-[20px] pl-[40px] w-[674px] h-[64px]">
                        <div className="flex gap-[20px] items-center w-full text-left text-lg">
                            <span className="text-teal-400 text-xl">+</span>
                            <span className='text-[16px] font-[400px]'>How does EthAi track smart money flow?</span>
                        </div>

                    </div>

                    <div className="pt-[20px] pb-[20px] pl-[40px] w-[674px] h-[64px]">
                        <div className="flex gap-[20px] items-center w-full text-left text-lg">
                            <span className="text-teal-400 text-xl">+</span>
                            <span className='text-[16px] font-[400px]'>How does EthAi ensure data security?</span>

                        </div>

                    </div>

                </div>
            </div>

            <div className="w-[960px] h-[382px] rounded-[20px] py-[56px] px-[156px] 
                shadow-inner 
                shadow-[inset_0px_0px_32px_16px_rgba(99,242,255,0.1)] 
                mx-auto flex flex-col items-center gap-[32px]">

                <h1 className="w-[648px] h-[44px] text-[40px] font-[500] text-center text-white">
                    Explore Our <span className="text-[#62F0FE]">dApp</span>
                </h1>

                <p className='w-[703px] h-[120px] font-[400] text-[16px] text-[#B0FAFF] text-justify'>
                    EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
                </p>

                <button className='w-[140px] h-[44px] bg-[#CDFCFF] text-black rounded-[12px] py-[2px] px-[24px]
                shadow-inner 
                shadow-[inset_0px_0px_1px_1px_rgba(76,221,253,1) text-[16px] font-[500] '>Open dApp</button>
            </div>

        </div>
    )
}

export default Faq
