import Image from 'next/image'
import bb from '../../public/football-banner/bb.png'
import bf from '../../public/football-banner/bf.png'
import ff from '../../public/football-banner/ff.png'
import fsf from '../../public/football-banner/fsf.png'
import nt from '../../public/football-banner/nt.png'
import ssf from '../../public/football-banner/ssf.png'
import ttf from '../../public/football-banner/ttf.png'
import vss from '../../public/football-banner/vss.png'
import Link from 'next/link'

// import bbl from '../../public/football-logo/bb.png'
// import bfl from '../../public/football-logo/bfl.png'
// import ffl from '../../public/football-logo/ffl.png'
// import fsfl from '../../public/football-logo/fsfl.png'
// import ntl from '../../public/football-logo/ntl.png'
// import ssfl from '../../public/football-logo/ssfl.png'
// import ttfl from '../../public/football-logo/ttfl.png'
// import vssl from '../../public/football-logo/vssl.png'

import game from '../../public/games_logo/hermes.png'
import iiitv from '../../public/iiitv.png'
import jhansi_banner from '../../public/Girls_Football_Banner/Jhansi_Banner.png'
import azad_sena_banner from '../../public/Girls_Football_Banner/Azad_Sena_Banner.png'
import freedom_fighters_banner from '../../public/Girls_Football_Banner/Freedom_Fighters_Banner.png'

// import jhansi_logo from '../../public/Girls_Football_Logo/Jhansi_Logo.png'
// import azad_sena_logo from '../../public/Girls_Football_Logo/Azad_Sena_Logo.png'
// import freedom_fighters_logo from '../../public/Girls_Football_Logo/Freedom_Fighters_Logo.png'

import { footabll_stats_boys, footabll_stats_girls } from '../Utils/stats'
import { sortFootballTeams } from '../Utils/functions'

const football = () => {
  return (
    <>
      <video className="absolute m-0 p-0 w-full h-screen object-cover -z-10" src="football-bgc.mp4" autoPlay loop muted></video>
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-8 lg:px-24 lg:pt-12 overflow-x-hidden">
        <div className='flex flex-col h-full lg:flex-row lg:justify-between mt-64 lg:gap-8'>
          <div className='flex flex-col w-4/12 lg:w-auto mx-auto'>
            <div className='flex flex-col lg:w-[200px]'>
              <Image src={game} alt='Cricket Logo'></Image>
            </div>
          </div>
          <div className='flex flex-col lg:w-auto text-center'>
            <div className="stats shadow rounded-2xl mt-5">
              <div className="stat">
                <div className="stat-title">Total Goals</div>
                <div className="stat-value">0</div>
                <div className="stat-desc">Matches 0</div>
              </div>

              <div className="stat">
                <div className="stat-title">Saves</div>
                <div className="stat-value">0</div>
                <div className="stat-desc">cleansheets 0</div>
              </div>
              
            </div>
            <div className="stats shadow mt-3 rounded-2xl">

              <div className="stat">
                <div className="stat-title">Golden Boot</div>
                <div className="stat-value">0</div>
                <div className="stat-desc">Name</div>
              </div>

              <div className="stat">
                <div className="stat-title">Golden Glove</div>
                <div className="stat-value">0</div>
                <div className="stat-desc">Name</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='mt-16 lg:mt-24 text-1xl lg:text-3xl font-bold mr-auto pt-1'>Today's Match</div>
        <div className="flex flex-col w-full lg:flex-row mt-10">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard1.png" width={640} height={128} alt='card'></Image></div>
          <div className="divider lg:divider-horizontal">1st</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard2.png" width={640} height={128} alt='card'></Image></div>
        </div> */}
        {/* <div className="flex flex-col w-full lg:flex-row mt-16">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard2.png" width={640} height={128} alt='card'></Image></div>
          <div className="divider lg:divider-horizontal">2nd</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard1.png" width={640} height={128} alt='card'></Image></div>
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-10">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard1.png" width={640} height={128} alt='card'></Image></div>
          <div className="divider lg:divider-horizontal">3rd</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard2.png" width={640} height={128} alt='card'></Image></div>
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-16">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard2.png" width={640} height={128} alt='card'></Image></div>
          <div className="divider lg:divider-horizontal">4th</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard1.png" width={640} height={128} alt='card'></Image></div>
        </div> */}

        <div className='flex flex-col p-8 lg:pt-0 lg:px-20 absolute mt-[100vh]'>
          <div className='text-xl mr-auto'>Men&apos;s Teams</div>
          <hr className='lg:pt-3' />
          <div className='lg:px-96'>
            <div className="carousel w-full mt-4">
              <div id="item1" className="carousel-item w-full">
                <Image src={bb} alt='team banner' className="w-full"></Image>
              </div>
              <div id="item2" className="carousel-item w-full">
                <Image src={bf} alt='team banner' className="w-full"></Image>
              </div>
              <div id="item3" className="carousel-item w-full">
                <Image src={ff} alt='team banner' className="w-full"></Image>
              </div>
              <div id="item4" className="carousel-item w-full">
                <Image src={fsf} alt='team banner' className="w-full"></Image>
              </div>
              <div id="item5" className="carousel-item w-full">
                <Image src={nt} alt='team banner' className="w-full"></Image>
              </div>
              <div id="item6" className="carousel-item w-full">
                <Image src={ssf} alt='team banner' className="w-full"></Image>
              </div>
              <div id="item7" className="carousel-item w-full">
                <Image src={ttf} alt='team banner' className="w-full"></Image>
              </div>
              <div id="item8" className="carousel-item w-full">
                <Image src={vss} alt='team banner' className="w-full"></Image>
              </div>
            </div>

          </div>

          <div className="flex justify-center w-full py-2 gap-2 mt-1">
            <Link href="#item1" className="btn btn-xs">1</Link>
            <Link href="#item2" className="btn btn-xs">2</Link>
            <Link href="#item3" className="btn btn-xs">3</Link>
            <Link href="#item4" className="btn btn-xs">4</Link>
            <Link href="#item5" className="btn btn-xs">5</Link>
            <Link href="#item6" className="btn btn-xs">6</Link>
            <Link href="#item7" className="btn btn-xs">7</Link>
            <Link href="#item8" className="btn btn-xs">8</Link>
          </div>
          <hr />
          <div className='mt-10 text-xl mr-auto'>Standing</div>
          <table className="table mt-4">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Team</th>
                <th>Wins | Draws | Losses</th>
                <th>Points | Goals</th>
              </tr>
            </thead>
            <tbody>
              {sortFootballTeams(footabll_stats_boys).map((stat, idx) => 
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image src={stat.image} alt='logo' width="100" height="100"></Image>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-9">{stat.wins} : {stat.draws} : {stat.losses}</td>
                  <td className="px-9">{stat.points} : {stat.goals}</td>
                </tr>
              )}
            </tbody>

          </table>

          <div className='text-xl mr-auto mt-10'>Girl&apos;s Teams</div>
          <hr className='lg:pt-3' />
          <div className='lg:px-96'>
            <div className="carousel w-full mt-4">
              <div id="itemg1" className="carousel-item w-full">
                <Image src={azad_sena_banner} alt='team banner' className="w-full"></Image>
              </div>
              <div id="itemg2" className="carousel-item w-full">
                <Image src={freedom_fighters_banner} alt='team banner' className="w-full"></Image>
              </div>
              <div id="itemg3" className="carousel-item w-full">
                <Image src={jhansi_banner} alt='team banner' className="w-full"></Image>
              </div>
            </div>

          </div>

          <div className="flex justify-center w-full py-2 gap-2 mt-1">
            <Link href="#itemg1" className="btn btn-xs">1</Link>
            <Link href="#itemg2" className="btn btn-xs">2</Link>
            <Link href="#itemg3" className="btn btn-xs">3</Link>
          </div>
          <hr />
          <div className='mt-10 text-xl mr-auto'>Standing</div>
          <table className="table mt-4">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Team</th>
                <th>Wins | Draws | Losses</th>
                <th>Points | Goals</th>
              </tr>
            </thead>
            <tbody>
            {sortFootballTeams(footabll_stats_girls).map((stat, idx) => 
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image src={stat.image} alt='logo' width="100" height="100"></Image>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-9">{stat.wins} : {stat.draws} : {stat.losses}</td>
                  <td className="px-9">{stat.points} : {stat.goals}</td>
                </tr>
              )}
            </tbody>

          </table>

          <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-20">
            <aside className="items-center grid-flow-col">
              {/* <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
              <Image src={iiitv} width={50} height={50} alt='iitv'></Image>
              <p>IIITV-ICD © 2024 - All right reserved</p>
            </aside>
          </footer>
        </div>
      </main>
    </>
  )
}

export default football