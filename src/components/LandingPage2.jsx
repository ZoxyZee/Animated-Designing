import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
// this is not the main page can be deleted if creates any problem

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index)=>{
          return (
            <div className='masker'>
              <div className='w-fit flex overflow-hidden '>
                {index === 1 && (
                  <div className='mr-1 w-[9vw] h-[7vw] relative top-[1vw] bg-red-500'></div>
                )}
                <h1 className='flex items-center uppercase text-[8vw] h-full leading-[7.5vw] tracking-tighter  font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
          {[
            "For Public and private companies", 
          "From the first pitch to IPOO"
            ].map((item, index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
          ))}
          <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>Here we will be starting the Project</div>
            <div className='w-10 h- 10 flex items-center border-[2px] border-zinc-500 rounded-full'>
              <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
              </span>
            </div>
          </div>
        </div>

    </div>
  );
}

export default LandingPage
