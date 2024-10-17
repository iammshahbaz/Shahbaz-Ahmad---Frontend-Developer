import React from 'react';
import tools from '../assets/tools.png';
import wallet from '../assets/wallet.png';
import future from '../assets/future.png';
import graph from '../assets/graph.png';

const About = () => {
  return (
    <div className="min-h-screen bg-[#00161D] text-white py-8">
      {/* About Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-[40px] font-[400] mb-4">About EthAi</h1>
        <p className="text-[#B0FAFF] max-w-2xl mx-auto">
          At EthAi, we’re all about making crypto trading easier and more intuitive.
          We provide tools that help traders keep up with all new market trends,
          track top traders’ movements.
        </p>
        <button className="px-6 py-2 mt-6 bg-[#CDFCFF] font-[500] shadow-lg hover:shadow-xl rounded-2xl text-gray-950 hover:bg-teal-700 transition duration-300">
          Read more
        </button>
      </div>

      {/* Features Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#08252A] rounded-lg max-w-[744px] md:max-h-[400px] mx-auto p-4 sm:p-6 overflow-hidden">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/f581/08a4/-9842-4434-816a-ae0df77dfb21?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=clHR3HHGkj6XBkMAtNWmcAUwge0TOqCpqV8fHOhFXjSOiGKsghHyRBw4k0f01cf2Xsd-bttPTbMJWQjZbBSAQ-U41m2DDXMgkLQ2mpty0TU-EB~bRnhuo1nPJ2KUDCydibgMdHEUyp3rmzRx99Fo2KRtmxkJNSNBXsHPwL5TjcR1Vq9G4hlPmHnNSGbaXKiCA16hePXHcQ4tdblvhcR-x1hkkJjljopjpuDiZhnNFfvmNQAZY51G-IRRVR8OPZOBjqt6W4-yFxTQewdm7BYVneab-NaGk9uB8g4OPny6RwWKB3x05UA6--edUFu2Y1pghOsjupi22~M7qiySpGZAuA__"
    autoPlay
    loop
    muted
    playsInline
  />
  
  {/* Feature 1 */}
  <div className="relative p-4 shadow-lg bg-[#08252A] bg-opacity-75 rounded-lg">
    <div className="text-teal-400 text-3xl mb-4">
      <img src={graph} alt="Graph Icon" className="w-5 h-[18px]" />
    </div>
    <h3 className="text-[18px] font-[500] mb-2">Stay Ahead</h3>
    <p className="text-[16px] font-[400] mb-2 text-[#B0FAFF]">
      No more guesswork—get clear, trustable insights.
    </p>
  </div>

  {/* Feature 2 */}
  <div className="relative p-4 shadow-lg bg-[#08252A] bg-opacity-75 rounded-lg">
    <div className="text-teal-400 text-3xl mb-4">
      <img src={wallet} alt="Wallet Icon" className="w-5 h-[18px]" />
    </div>
    <h3 className="text-[18px] font-[500] mb-2">Know Your Assets</h3>
    <p className="text-[16px] font-[400] mb-2 text-[#B0FAFF]">
      Always stay on top of how your investments are performing.
    </p>
  </div>

  {/* Feature 3 */}
  <div className="relative p-4 shadow-lg bg-[#08252A] bg-opacity-75 rounded-lg">
    <div className="text-teal-400 text-3xl mb-4">
      <img src={tools} alt="Tools Icon" className="w-5 h-[18px]" />
    </div>
    <h3 className="text-[18px] font-[500] mb-2">Simple, Not Overwhelming</h3>
    <p className="text-[16px] font-[400] mb-2 text-[#B0FAFF]">
      Our tools are designed to make complex market analysis easy to understand and act on.
    </p>
  </div>

  {/* Feature 4 */}
  <div className="relative p-4 shadow-lg bg-[#08252A] bg-opacity-75 rounded-lg">
    <div className="text-teal-400 text-3xl mb-4">
      <img src={future} alt="Future Icon" className="w-5 h-[18px]" />
    </div>
    <h3 className="text-[18px] font-[500] mb-2">Future-Proof</h3>
    <p className="text-[16px] font-[400] mb-2 text-[#B0FAFF]">
      We’re constantly improving, adding new features to help you make the most informed decisions possible.
    </p>
  </div>
</div>

    </div>
  );
};

export default About;
