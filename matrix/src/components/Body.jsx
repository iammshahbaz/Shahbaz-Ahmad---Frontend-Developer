import React from 'react'
import body from "../assets/body.png"
import chip from "../assets/chip.png"
import rect from "../assets/rect.png"

const Body = () => {
  return (
  
  <div className='bg-[#00161D] pt-8 pb-10'>
  <div className="flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-3 justify-between md:max-w-[1200px] md:h-[504px] mx-auto mt-4">
  {/* Row 1 */}
  <div className="col-span-1 row-span-2 bg-[#0F373C] rounded-md md:w-[280px] md:h-[504px] mr-0  text-white">
    <img className='mx-auto p-12' src={rect} alt="" />
    <div className='w-[232px] h-[203px] text-center mx-auto p-auto'>
      <h4 className='font-[500] text-[22px] p-4'>Trade Optimizer</h4>
    <p className='font-[400] text-[16px]'>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
    </div>
  </div>

  <div className="col-span-2 row-span-1 md:w-[608px] md:h-[198px] bg-[#0F373C] rounded-md  text-white">
  <div className='md:w-[360px] md:h-[134px] mt-4 mb-4 text-left m-auto pt-6 p-4'>
      <h4 className='font-[500] text-[22px]'>Market Insight</h4>
    <p className='font-[400] text-[16px]'>Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
    </div>
  </div>

  {/* Row 2 */}
  <div className="col-span-1 row-span-2 md:w-[280px] md:h-[504px]  md:ml-2  md:p-4 bg-[#0F373C] rounded-md text-center text-white">
  <img className='mx-auto' src={chip} alt="" />
    <div className='md:w-[232px] md:h-[203px] text-center mx-auto p-auto'>
      <h4 className='font-[500] text-[22px] p-4'>Risk Guard</h4>
    <p className='font-[400] text-[16px]'>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
    </div>
  </div>

  {/* Row 3 */}
  <div className=" col-span-2 row-span-1 md:w-[608px] md:h-[290px] mt-10 bg-[#0F373C] rounded-md   text-white  shadow-[inset_0px_0px_32px_16px_rgba(99,242,255,0.4)]">
  </div>
</div>

{/* last2 */}

<div className="flex flex-col md:flex-row mt-4 justify-between mx-auto gap-4 max-w-full md:max-w-[1200px]">
  <div className='md:w-[446px] md:h-[240px] bg-[#0F373C] text-white rounded-md'>
    <div className='md:w-[254px] md:h-[96px] text-left  p-4 ml-4'> 
      <h4 className='font-[500] text-[22px] p-4'>Portfolio Sync</h4>
      <p className='font-[400] text-[16px]'>Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
    </div>
  </div>

  <div className='md:w-[738px] h-[240px] bg-[#0F373C] text-white rounded-md'>
    <div className='w-[299px] h-[158px] text-left ml-4  p-4'> 
      <h4 className='font-[500] text-[22px] p-4'>Opportunity Scout</h4>
      <p className='font-[400] text-[16px]'>Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
    </div>
  </div>
</div>

</div>

  
  )
}

export default Body
