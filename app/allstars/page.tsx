import React from 'react'
import iiitv from '../../public/iiitv.png'
import Image from 'next/image'
const allstars = () => {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-8 lg:p-24 overflow-x-hidden">
        <div className='flex content-center align-middle w-[60vw] text-sky-200 border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]'>
          <div className='-z-10'>
            <video src="/temp/Versus_1.mp4" autoPlay loop muted></video>
          </div>
          <div className='w-2/12 z-10 mx-auto content-center text-center font-bold'>
            <h1 className='text-4xl'>D</h1>
            <h1 className='text-2xl'>U</h1>
            <h1 className='text-xl'>N</h1>
            <h1 className='text-xl'>k</h1>
            <h1 className='text-xl'>k</h1>
            <h1 className='text-xl'>k</h1>
            {/* <h1 className='text-xl'>k</h1> */}
            <h1 className='text-lg'>🔥🔥</h1>
            <h1 className='text-sm'>🔥</h1>
            {/* <h1 className='text-xs'>K</h1> */}
            
            
            <img src="/public/games_logo/boombasket.svg"  alt="" />
          </div>

        </div>
        <div className='flex bg-[rgba(24,50,100,.4)] w-[60vw]'>
          <video src="/temp/Versus_2.mp4" autoPlay loop muted></video>
        </div>
        <div className='flex bg-[rgba(24,50,100,.4)] w-[60vw]'>
          <video src="/temp/Versus_3.mp4" autoPlay loop muted></video>
        </div>
        <div className='flex bg-[rgba(24,50,100,.4)] w-[60vw]'>
          <video src="/temp/Versus_4.mp4" autoPlay loop muted></video>
        </div>
      </main>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-0">
        <aside className="items-center grid-flow-col">
          <Image src={iiitv} width={50} height={50} alt='iitv'></Image>
          <p>IIITV-ICD © 2024 - All right reserved</p>
        </aside>
      </footer>
    </>
  )
}

export default allstars