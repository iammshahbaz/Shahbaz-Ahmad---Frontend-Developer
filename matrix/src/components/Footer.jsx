import React from 'react'
import logo from "../assets/logo.png"
import telegram from "../assets/telegram.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import discord from "../assets/discord.png"

const Footer = () => {
    return (
        <div className="bg-[#010F14] text-white px-6 py-8 lg:px-[66px] lg:py-0 flex flex-col lg:flex-row lg:justify-between">
            
            {/* Left Side */}
            <div className="lg:mt-[100px] mt-8 lg:ml-0 flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-2 w-full lg:w-[156px] h-[48px] gap-[4px] justify-center lg:justify-start">
                    <img className='w-[56px]' src={logo} alt="Logo" />
                    <span className="text-[28px] lg:text-[38px] font-[700]">EthAi</span>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 w-full lg:w-[320px] h-[45px] pt-6 lg:pt-[34px] justify-center lg:justify-start gap-[20px]">
                    <a href="#">
                        <div className="h-[45px] w-[45px] bg-[#0C2B2F] flex items-center justify-center rounded-full">
                            <img src={telegram} alt="Telegram" className="h-[20px] w-[22.4px]" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-[45px] w-[45px] bg-[#0C2B2F] flex items-center justify-center rounded-full">
                            <img src={instagram} alt="Instagram" className="h-[28px] w-[28px]" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-[45px] w-[45px] bg-[#0C2B2F] flex items-center justify-center rounded-full">
                            <img src={twitter} alt="X" className="h-[28px] w-[31px]" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-[45px] w-[45px] bg-[#0C2B2F] flex items-center justify-center rounded-full">
                            <img src={facebook} alt="Facebook" className="h-[31px] w-[17px]" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="h-[45px] w-[45px] bg-[#0C2B2F] flex items-center justify-center rounded-full">
                            <img src={discord} alt="Discord" className="h-[22.4px] w-[31px]" />
                        </div>
                    </a>
                </div>
            </div>

            {/* Right Side  */}
            <div className="text-center lg:text-left mt-8 lg:mt-0 w-full lg:w-[480px] pt-8 lg:pt-[100px]">
                <p className="text-[24px] lg:text-[40px] font-[500] leading-snug">
                    “Designed for traders of today, just like you.”
                </p>
                <div className="py-[16px] flex flex-col sm:flex-row items-center justify-center lg:justify-start">
                    <input
                        type="email"
                        placeholder="What's your work email?"
                        className="bg-transparent border border-white px-4 py-2 rounded-l-md focus:outline-none w-full sm:w-[334px] h-[52px]"
                    />
                    <button className="w-full sm:w-[152px] h-[52px] mt-4 sm:mt-0 sm:ml-0 text-white text-[16px] font-[500] rounded-r-md hover:bg-teal-500 transition shadow-[inset_0px_0px_32px_16px_rgba(139,249,232,0.2)]">
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Footer;
