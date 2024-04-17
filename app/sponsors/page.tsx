import React from 'react'
import Image from 'next/image'
import spon from '../../public/sponsor.png'
import amis from '../../public/amis.png'

const Sponsors = () => {
  return (
    <>
      <video className="fixed m-0 p-0 w-full h-screen object-cover -z-10" src="s-bg.mp4" autoPlay loop muted></video>
      <main className="flex min-h-screen bg-[rgba(0,0,0,.4)] flex-col items-center content-center p-24 justify-center ">
        <div className='-mt-20 lg:mt-10'>
          <h1 className='text-2xl lg:text-3xl font-bold text-white text-center'>TITLE SPONSOR</h1>
        </div>
        <Image src={amis} className='w-[4/12] lg:max-w-[800px] rounded-lg mt-8' alt='sponsor'></Image>
      </main>
    </>
  )
}

export default Sponsors