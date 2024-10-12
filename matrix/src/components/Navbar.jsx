import React from 'react';
import logo from "../assets/logo.png";
import background from "../assets/background.png";

const Navbar = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <nav className="text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-9 w-9 mr-3" />
          </div>

          
          <div className="flex space-x-8 border border-transparent rounded-full py-2 px-8 mx-4 bg-[#0C2B2F] text-[#B0FAFFB2]">
            <a href="#home" className="hover:text-blue-400 transition">Features</a>
            <a href="#about" className="hover:text-blue-400 transition">Why Us</a>
            <a href="#services" className="hover:text-blue-400 transition">Tokenomics</a>
            <a href="#contact" className="hover:text-blue-400 transition">Roadmap</a>
          </div>

        
          <div className="flex space-x-4">
            <button className="text-white hover:underline transition">Login</button>
            <button className="bg-[#CDFCFF] shadow-lg hover:shadow-xl px-4 py-2 rounded-2xl text-gray-950 hover:bg-blue-600 transition">
              Whitepaper
            </button>
          </div>
        </div>
      </nav>

    
      <div className="min-h-screen flex flex-col justify-center items-center my-0">
       
        <div className="relative z-10 text-center">
          <h1 className="text-xl md:text-6xl font-sans font-normal text-white leading-tight">
            When Innovation <br />
            <span className="text-blue-400 my-2">Meets</span>
            <button className='bg-[#CDFCFF] py-2 pt-0 px-4 rounded-full text-gray-950 my-2 mx-4'>Investment</button>
          </h1>
          <p className="mt-4 text-lg text-[#B0FAFF]">
            Empowering Trading Through Advanced Technology
          </p>

       
          <button className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            Open dApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
