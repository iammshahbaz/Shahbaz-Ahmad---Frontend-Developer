import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
    
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1z3asm5klJaqOfw-UxCFvUZLAX35F11cGWF3zdtg-DSW5CX9k2CfqdMlBgIRX4nHWv94jDiZdTQw9otP5kyGdQiPolaPbctoGu~J4tB15IzrRxOhTyz5HtTjC0aXTkLojSqW-TxS0zLDdmtMQ7ie3FNXSw5DA4QttPHgFbbC5P~c7wgCRe7wrjiWob9uUHhNtpc4fqARZc2O59Y49dbvTOSbqcCsO5hO7vJ2fhlX2accEpzK8BQvgsynWZA0wKb~jeJbY3Wm61V6EmDaamWy4j8JwsGiYG1OCCuMQzHgDedk0ponjVdyiaH0F0cR~DZk3puPM3LPbUOQqDu39a4PQ__"
        autoPlay
        loop
        muted
        playsInline
      />
    
     
      <nav className="fixed top-0 z-10 w-full text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center ml-[25.8px]">
            <img src={logo} alt="Logo" className="h-9 w-9" />
            <p className="font-[700] text-[23px] mt-0 pt-0">EthAi</p>
          </div>
    
          {/* Middle Components */}
          <div className="hidden md:flex space-x-8 border border-transparent rounded-full justify-center align-middle py-3 gap-2 w-[655px] h-[64px] bg-[#0C2B2F] text-[#B0FAFFB2]">
            <a href="#home" className="hover:text-blue-400 transition">Features</a>
            <a href="#about" className="hover:text-blue-400 transition">Why Us</a>
            <a href="#services" className="hover:text-blue-400 transition">Tokenomics</a>
            <a href="#contact" className="hover:text-blue-400 transition">Roadmap</a>
          </div>
    
          {/* Right-side Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="text-white hover:underline transition">Login</button>
            <button className="bg-[#CDFCFF] shadow-lg hover:shadow-xl px-4 py-2 rounded-2xl font[500] text-gray-950 hover:bg-blue-600 transition">
              Whitepaper
            </button>
          </div>
    
          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none w-[44px] h-[44px] flex flex-col justify-center items-center"
            >
              <div className="w-8 h-1 bg-white mb-1"></div>
              <div className="w-8 h-1 bg-white mb-1"></div>
            </button>
          </div>
        </div>
    
        {isOpen && (
          <div className="md:hidden bg-[#0C2B2F] text-[#B0FAFFB2] p-4 mt-4 rounded-md border border-[#CDFCFF]">
            <a href="#home" className="block py-2 text-white hover:text-blue-400 transition">Features</a>
            <a href="#about" className="block py-2 text-white hover:text-blue-400 transition">Why Us</a>
            <a href="#services" className="block py-2 text-white hover:text-blue-400 transition">Tokenomics</a>
            <a href="#contact" className="block py-2 text-white hover:text-blue-400 transition">Roadmap</a>
            <hr className="my-2 border-t border-gray-600" />
            <button className="block w-full text-left py-2 text-white hover:underline transition">Login</button>
            <button className="block w-full text-left py-2 bg-[#CDFCFF] shadow-lg hover:shadow-xl rounded-2xl text-gray-950 hover:bg-blue-600 transition">
              Whitepaper
            </button>
          </div>
        )}
      </nav>
    
      {/* Main content */}
      <div className="min-h-screen flex flex-col justify-center items-center relative z-10 ">
        <div className="relative z-10 text-center">
          <div className="text-center sm:text-left">
            <h1 className="text-[36px] md:text-[72px] font-sans font-[500] text-white leading-tight">
              When Innovation <br />
              <span className="text-blue-400 my-2 block sm:inline">Meets</span>
              <button className="bg-[#CDFCFF] text-gray-950 px-4 pb-2 mx-auto rounded-full block sm:inline md:mx-4">
                Investment
              </button>
            </h1>
          </div>
          <p className="mt-4 text-lg md:text-2xl text-[#B0FAFF]">
            Empowering Trading Through Advanced Technology
          </p>
          <button 
            className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-[#CDFCFF] hover:text-gray-900 transition shadow-[inset_0px_0px_32px_16px_rgba(99,242,255,0.1)]"
          >
            Open dApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
