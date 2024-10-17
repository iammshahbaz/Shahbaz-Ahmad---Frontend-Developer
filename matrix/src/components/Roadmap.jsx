import React from 'react';
import build from "../assets/build.png";
import preview from "../assets/preview.png";
import crp from "../assets/crp.png";

const Roadmap = () => {
  return (
    <div className="bg-[#00161D] text-white pt-[64px] pb-[64px] h-auto">
      <h1 className="text-white text-center font-[400] text-[40px]">Roadmap</h1>

      {/* Phase 1 */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-[64px] px-4 md:px-0">
        {/* Phase 1 Text */}
        <div className="md:mx-[120px] md:pr-[56px] md:pl-[56px] w-full md:w-1/2">
          <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-medium mb-4 w-[71px] h-[28px]">
            Phase 1
          </button>
          <h1 className="text-[32px] md:text-[40px] font-[500] mb-6">Kicking Off</h1>
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

        {/* Phase 1 Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 relative">
  
  <video
    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-10"
    src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/037f/7f94/-dbe5-4e84-a0d0-34a0193e07d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k2eVQlf66fcfeu5aqk3pSXxFxARn31u2PoC4aQMKXyDeC3N1vDJzJYPcNFS49mpz78bk6kHNuAWVKLuv-zxdbq9vYGtm7ads4yJNFtvqKYLBwQUQO7c3vUnKbZFeGpZ-rkJx56p3bIEMx~0yREMmXVj1c9OnSeHpxa7tfQfbiHKNAHe5UYyi2lXdQ1LvtmrztHR7TEGQfaDnJOAA-KvNCDX-JelTc-GPb6ZmKtutplhI0nMS9RcfLHJvDS-GwueDeMEhS~vfTnnnuCQNEW8EafGFiB-gN9-Vh6XUUQvXnVRfzJtxY0ABjGKSOODRyzgUTA7ObXOidFjsJh0-cLSbKg__"
    autoPlay
    loop
    muted
    playsInline
  />
  
  {/* Image element */}
  <img
    src={build}
    alt="Phase Background"
    className="w-full h-[300px] md:h-[512px] object-cover rounded-lg"
  />
</div>

      </div>

      {/* Phase 2 */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[64px] px-4 md:px-0">
        {/* Phase 2 Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 relative">

  <video
    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-10"
    src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/cb86/a228/-0cff-4aa8-9d9a-c49552d1766c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTNvAIBzPrPjNmpZXye0ckBOYZnlZ11FzblBWls1xX6FpKLNUTC22YA7nIVDmEZLvgFD7iFevF6mt~ajj12GEDAQkS0yF8JTj9SYctj49p-IOV8ApKCiW0JVJVYbApwJhV1Rh-asA7Bpm2csJkmD~CERIKEZf5YwhR2jrLmPJo7Tn6mMlCCwv6vCHD5r--1sPJsg3CPD-gOVQjIgcHJIpKQqHzm9N-6BtlKY61zc1EWilZ5Z6x8XM0GjXW6PIFpcrmqtPBSoXHeq-BnSW5lzBQJ~BTrQOMkppo5GSGNh54In-LOhKscQQYrRDs0wYLhKoYsAhpo13jO-8yhfjIT92A__"
    autoPlay
    loop
    muted
    playsInline
  />
  
  {/* Image element */}
  <img
    src={preview}
    alt="Phase Background"
    className="w-full h-[300px] md:h-[512px] object-cover rounded-lg"
  />
</div>


        {/* Phase 2 Text */}
        <div className="md:mx-[120px] md:pr-[56px] md:pl-[56px] w-full md:w-1/2">
          <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-medium mb-4 w-[71px] h-[28px]">
            Phase 2
          </button>
          <h1 className="text-[32px] md:text-[40px] font-[500] mb-6">Bigger Insights</h1>
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

      {/* Phase 3 */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-[64px] px-4 md:px-0">
        {/* Phase 3 Text */}
        <div className="md:mx-[120px] md:pr-[56px] md:pl-[56px] w-full md:w-1/2">
          <button className="bg-[#F7F7F7] inline-block text-[16px] text-[#333333] rounded-md uppercase tracking-wide font-medium mb-4 w-[71px] h-[28px]">
            Phase 3
          </button>
          <h1 className="text-[32px] md:text-[40px] font-[500] mb-6">Full Power</h1>
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
              EthAi Advanced Learning Module
            </li>
          </ul>
        </div>

        {/* Phase 3 Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 relative">

<video
  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-10"
  src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/86e0/aff1/-c5e4-4b3f-b0ee-214e16d683f4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIvgvLO64Rv6IWUacSFhIyxGDdrR6J4K7f3mjTT82w2kn99znhte4WUDRgqJNR7x6X9OQ1GahqOzuGxUgxzlKht~nuuF1j-lTFBlYdMGMgL0dqa11rCr-O0U6yonoqLqGxBz7VeaFfRMYwbeo1VMO5xr~r7TkMVNo2084lOnu-Unn9OFqdfP0A~KUfL7jgoVmPGUTN4VoiarZQEQhIqlUUXl2lKH5T8UK9GmpQDpOQHjM6sdSCbm2uXq9V5E0koiN73C3TF9yVZRuGOn1wkg6El2VpeKjoQQKzrrSlaErGKLCueghNT5WzLegJ61EydZ4mZbyyXj64FMXTtIgV7B6A__"
  autoPlay
  loop
  muted
  playsInline
/>


<img
  src={crp}
  alt="Phase Background"
  className="w-full h-[300px] md:h-[512px] object-cover rounded-lg"
/>
</div>
      </div>
    </div>
  );
};

export default Roadmap;
