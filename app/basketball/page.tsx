import Image from 'next/image'
import React from 'react'
import aa from '../../public/aa.jpg'
import amba from '../../public/amba.jpg'
import aw from '../../public/aw.jpg'
import bb from '../../public/bb.jpg'
import pp from '../../public/pp.jpg'
import savasol from '../../public/savasol.jpg'
import ss from '../../public/ss.jpg'
import Link from 'next/link'
import aal from '../../public/logos/aal.png'
import amball from '../../public/logos/amball.png'
import awl from '../../public/logos/awl.png'
import bbl from '../../public/logos/bbl.png'
import ppl from '../../public/logos/ppl.png'
import savsoll from '../../public/logos/savsoll.png'
import ssl from '../../public/logos/ssl.png'

const basketBall = () => {
  return (
    <>
      <video className="absolute m-0 p-0 w-full h-screen object-cover -z-10" src="cricket-bg-video.mp4" autoPlay loop muted></video>
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-8 lg:p-24 overflow-x-hidden">
        <div className='flex flex-col h-full lg:flex-row lg:justify-between mt-64 lg:gap-8'>
          <div className='flex flex-col w-4/12 lg:w-auto mx-auto'>
            <div className='flex flex-col'>
              <Image src="/cricket.png" width={200} height={300} alt='Cricket Logo'></Image>
              <Image src="/kratos.png" width={200} height={80} alt='Cricket event name'></Image>
            </div>
          </div>
          <div className='flex flex-col lg:w-auto'>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Total Runs</div>
                <div className="stat-value">412</div>
                <div className="stat-desc">Balls Played 158</div>
              </div>

              <div className="stat">
                <div className="stat-title">Highest Run</div>
                <div className="stat-value">93</div>
                <div className="stat-desc">Not Out</div>
              </div>
            </div>
            <div className="stats shadow mt-3">

              <div className="stat">
                <div className="stat-title">Wickets</div>
                <div className="stat-value">12</div>
                <div className="stat-desc">LBW 4</div>
              </div>

              <div className="stat">
                <div className="stat-title">Balls</div>
                <div className="stat-value">93</div>
                <div className="stat-desc">Maiden 0</div>
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
        <div className='text-xl mr-auto'>Teams</div>
        <hr className='lg:pt-3'/>
        <div className="carousel w-full mt-4">
          <div id="item1" className="carousel-item w-full">
            <Image src={aa} alt='team banner' className="w-full"></Image>
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image src={amba} alt='team banner' className="w-full"></Image>
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image src={aw} alt='team banner' className="w-full"></Image>
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image src={bb} alt='team banner' className="w-full"></Image>
          </div>
          <div id="item5" className="carousel-item w-full">
            <Image src={pp} alt='team banner' className="w-full"></Image>
          </div>
          <div id="item6" className="carousel-item w-full">
            <Image src={savasol} alt='team banner' className="w-full"></Image>
          </div>
          <div id="item7" className="carousel-item w-full">
            <Image src={ss} alt='team banner' className="w-full"></Image>
          </div>
          <div id="item8" className="carousel-item w-full">
            <Image src={ss} alt='team banner' className="w-full"></Image>
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
        <hr/>
        <div className='mt-10 text-xl mr-auto'>Standing</div>
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Team</th>
              <th>Wins | Loss</th>
              <th>Runs | Wicket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={aal} alt='logo'></Image>
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-9'>
                0 : 0
                <br />
                {/* <span className="badge badge-ghost badge-sm">Draw 1</span> */}
              </td>
              <td className='px-9'>0 : 0</td>
            </tr>

            <tr>
              <th>2</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={amball} alt='logo'></Image>
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-9'>
                0 : 0
                <br />
                {/* <span className="badge badge-ghost badge-sm">Draw 1</span> */}
              </td>
              <td className='px-9'>0 : 0</td>
            </tr>

            <tr>
              <th>3</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={awl} alt='logo'></Image>
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-9'>
                0 : 0
                <br />
                {/* <span className="badge badge-ghost badge-sm">Draw 1</span> */}
              </td>
              <td className='px-9'>0 : 0</td>
            </tr>

            <tr>
              <th>4</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={bbl} alt='logo'></Image>
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-9'>
                0 : 0
                <br />
                {/* <span className="badge badge-ghost badge-sm">Draw 1</span> */}
              </td>
              <td className='px-9'>0 : 0</td>
            </tr>

            <tr>
              <th>5</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={ppl} alt='logo'></Image>
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-9'>
                0 : 0
                <br />
                {/* <span className="badge badge-ghost badge-sm">Draw 1</span> */}
              </td>
              <td className='px-9'>0 : 0</td>
            </tr>

            <tr>
              <th>6</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={savsoll} alt='logo'></Image>
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-9'>
                0 : 0
                <br />
                {/* <span className="badge badge-ghost badge-sm">Draw 1</span> */}
              </td>
              <td className='px-9'>0 : 0</td>
            </tr>

            <tr>
              <th>7</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={ssl} alt='logo'></Image>
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-9'>
                0 : 0
                <br />
                {/* <span className="badge badge-ghost badge-sm">Draw 1</span> */}
              </td>
              <td className='px-9'>0 : 0</td>
            </tr>

            <tr>
              <th>8</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={ssl} alt='logo'></Image>
                    </div>
                  </div>
                </div>
              </td>
              <td className='px-9'>
                0 : 0
                <br />
                {/* <span className="badge badge-ghost badge-sm">Draw 1</span> */}
              </td>
              <td className='px-9'>0 : 0</td>
            </tr>
           
          </tbody>

        </table>

        <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-20">
                <aside className="items-center grid-flow-col">
                    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>IIITV-ICD © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </nav>
            </footer>
      </div>
      </main>
    </>
  )
}

export default basketBall