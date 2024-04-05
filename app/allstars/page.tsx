import React from 'react'
import iiitv from '../../public/iiitv.png'
import Image from 'next/image'
import caa from '../../public/CRICKET TEAM CARD_PNG/alluri arrows.png'
import caw from '../../public/CRICKET TEAM CARD_PNG/azad warriors.png'
import cbb from '../../public/CRICKET TEAM CARD_PNG/bose battalion.png'
import cll from '../../public/CRICKET TEAM CARD_PNG/lokmanya lions.png'
import cpp from '../../public/CRICKET TEAM CARD_PNG/patel patriots.png'
import css from '../../public/CRICKET TEAM CARD_PNG/savarkars soldiers.png'
import cshastris from '../../public/CRICKET TEAM CARD_PNG/shastri strikers.png'
import fff from '../../public/FOOTBALL TEAM CARD_PNG/freedom fighter.png'
import fbb from '../../public/FOOTBALL TEAM CARD_PNG/bhagat blitzers.png'
import fbf from '../../public/FOOTBALL TEAM CARD_PNG/bharathiyar fc.png'
import ffs from '../../public/FOOTBALL TEAM CARD_PNG/freedom strikers fc.png'
import fnt from '../../public/FOOTBALL TEAM CARD_PNG/netaji titans.png'
import fss from '../../public/FOOTBALL TEAM CARD_PNG/shurveer savarkar fc.png'
import ftt from '../../public/FOOTBALL TEAM CARD_PNG/tilak titans fc.png'
import fvs from '../../public/FOOTBALL TEAM CARD_PNG/veer shubash squad.png'
import cfa from '../../public/CRICKET TEAM CARD_PNG/faculty.png'
import game from '../../public/games_logo/kratos.png'
import game1 from '../../public/games_logo/pongfinity.png'
import game2 from '../../public/games_logo/volleywar.png'
import game3 from '../../public/games_logo/boombasket.png'
import game4 from '../../public/games_logo/hermes.png'
const allstars = () => {
  return (
    <>
      <video className="fixed m-0 p-0 w-full h-screen object-cover -z-10" src="as-bg.mp4" autoPlay loop muted></video>
      <main className="flex min-h-screen w-full lg:max-w-[1000px] mx-auto flex-col items-center justify-between px-8 pt-32 lg:p-24 overflow-x-hidden gap-10">
        <div className='flex flex-col p-2 round-xl content-center justify-center gap-6 bg-[rgba(0,0,0,.4)] rounded-lg'>
          <div className='flex flex-row content-center justify-center gap-7'>
            <Image src={game} className='w-3/12' alt='Cricket Logo'></Image>
            <Image src={game1} className='w-3/12' alt='Cricket Logo'></Image>
            <Image src={game2} className='w-3/12' alt='Cricket Logo'></Image>
          </div>
          <div className='flex flex-row content-center justify-center gap-7'>
            <Image src={game3} className='w-3/12' alt='Cricket Logo'></Image>
            <Image src={game4} className='w-3/12' alt='Cricket Logo'></Image>
          </div>
        </div>
        <Image className='w-10/12 lg:mt-8 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={fff} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={fbf} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={ffs} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={fnt} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={fbb} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={fss} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={ftt} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={fvs} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={caa} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={caw} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={cbb} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={cll} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={cpp} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={css} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={cshastris} alt='football team'></Image>
        <Image className='w-10/12 rounded-2xl border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]' src={cfa} alt='football team'></Image>





      </main>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-4">
        <aside className="items-center grid-flow-col">
          <Image src={iiitv} width={50} height={50} alt='iitv'></Image>
          <p>IIITV-ICD © 2024 - All right reserved</p>
        </aside>
      </footer>
    </>
  )
}

export default allstars
{/*<div className='flex content-center align-middle w-[60vw] text-sky-200 border-2 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]'>
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
            <h1 className='text-xl'>k</h1>
            <h1 className='text-lg'>🔥🔥</h1>
            <h1 className='text-sm'>🔥</h1>
            <h1 className='text-xs'>K</h1>


            <img src="/public/games_logo/boombasket.svg" alt="" />
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
 */}