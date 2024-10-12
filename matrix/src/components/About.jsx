import React from 'react'
import tools from "../assets/tools.png"
import wallet from "../assets/wallet.png"
import future from "../assets/future.png"
import graph from "../assets/graph.png"

const About = () => {
  return (
    <div className="min-h-screen bg-[#00161D] text-white py-8">
    {/* About Section */}
    <div className="text-center mb-12">
      <h1 className="text-3xl font-400 mb-4">About EthAi</h1>
      <p className="text-[#B0FAFF] max-w-2xl mx-auto">
        At EthAi, we’re all about making crypto trading easier and more intuitive.
        We provide tools that help traders keep up with all new market trends,
        track top traders’ movements.
      </p>
      <button className=" px-6 py-2 mt-6 bg-[#CDFCFF] shadow-lg hover:shadow-xl rounded-2xl text-gray-950  hover:bg-teal-700 transition duration-300">
        Read more
      </button>
    </div>
  
    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#08252A] rounded-lg max-w-[744px] h-[400px] mx-auto">
      {/* Feature 1 */}
      <div className=" p-6 shadow-lg">
        <div className="text-teal-400 text-3xl mb-4">
        <img src={graph} alt="" />
        </div>
        <h3 className="text-[18px] font-[500px] mb-2">Stay Ahead</h3>
        <p className="text-[16px] font-[400px] mb-2 text-[#B0FAFF]">No more guesswork—get clear, trustable insights.</p>
      </div>
  
      {/* Feature 2 */}
      <div className=" p-6  shadow-lg">
        <div className="text-teal-400 text-3xl mb-4">
          <img src={wallet} alt="" />
        </div>
        <h3 className="text-[18px] font-[500px] mb-2">Know Your Assets</h3>
        <p className="text-[16px] font-[400px] mb-2 text-[#B0FAFF]">Always stay on top of how your investments are performing.</p>
      </div>
  
      {/* Feature 3 */}
      <div className=" p-6  shadow-lg">
        <div className="text-teal-400 text-3xl mb-4">
        <img src={tools} alt="" />
        </div>
        <h3 className="text-[18px] font-[500px] mb-2">Simple, Not Overwhelming</h3>
        <p className="text-[16px] font-[400px] mb-2 text-[#B0FAFF]">Our tools are designed to make complex market analysis easy to understand and act on.</p>
      </div>
  
      {/* Feature 4 */}
      <div className=" p-6  shadow-lg">
        <div className="text-teal-400 text-3xl mb-4">
        <img src={future} alt="" />
        </div>
        <h3 className="text-[18px] font-[500px] mb-2">Future-Proof</h3>
        <p className="text-[16px] font-[400px] mb-2 text-[#B0FAFF]">We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
      </div>
    </div>
  </div>
  
  )
}

export default About
