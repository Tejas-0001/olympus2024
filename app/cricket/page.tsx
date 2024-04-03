import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const cricket = () => {
  return (
    <>
      <video className="absolute m-0 p-0 w-full h-screen object-cover -z-10" src="cricket-bg-video.mp4" autoPlay loop muted></video>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
        <div className='flex flex-col lg:flex-row lg:justify-between mt-64'>
          <div className='flex flex-col w-4/12 lg:w-auto mx-auto'>
            <div className='flex flex-col'>
              <Image src="/cricket.png" width={200} height={300} alt='Cricket Logo'></Image>
              <Image src="/kratos.png" width={200} height={80} alt='Cricket event name'></Image>
            </div>
          </div>
          <div className='flex flex-col lg:w-auto pl-8'>
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

        <div className='mt-16 lg:mt-24 text-1xl lg:text-3xl font-bold mr-auto pt-1'>Today's Match</div>
        <div className="flex flex-col w-full lg:flex-row mt-10">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard1.png" width={640} height={128} alt='card'></Image></div>
          <div className="divider lg:divider-horizontal">1st</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-transparent"><Image className='rounded-xl' src="/criccard2.png" width={640} height={128} alt='card'></Image></div>
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-16">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Image src="/criccard2.png" width={640} height={128} alt='card'></Image></div>
          <div className="divider lg:divider-horizontal">2nd</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Image src="/criccard1.png" width={640} height={128} alt='card'></Image></div>
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-10">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Image src="/criccard1.png" width={640} height={128} alt='card'></Image></div>
          <div className="divider lg:divider-horizontal">3rd</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Image src="/criccard2.png" width={640} height={128} alt='card'></Image></div>
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-16">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Image src="/criccard2.png" width={640} height={128} alt='card'></Image></div>
          <div className="divider lg:divider-horizontal">4th</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Image src="/criccard1.png" width={640} height={128} alt='card'></Image></div>
        </div>

        <div className='mt-20 text-5xl mr-auto'>Teams:</div>
        <div className="carousel w-full mt-8">
          <div id="item1" className="carousel-item w-full">
            <img src="/aa.jpg" className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="/amba.jpg" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="aw.jpg" className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="bb.jpg" className="w-full" />
          </div>
          <div id="item5" className="carousel-item w-full">
            <img src="pp.jpg" className="w-full" />
          </div>
          <div id="item6" className="carousel-item w-full">
            <img src="savasol.jpg" className="w-full" />
          </div>
          <div id="item7" className="carousel-item w-full">
            <img src="ss.jpg" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <Link href="#item1" className="btn btn-xs">1</Link>
          <Link href="#item2" className="btn btn-xs">2</Link>
          <Link href="#item3" className="btn btn-xs">3</Link>
          <Link href="#item4" className="btn btn-xs">4</Link>
          <Link href="#item5" className="btn btn-xs">5</Link>
          <Link href="#item6" className="btn btn-xs">6</Link>
          <Link href="#item7" className="btn btn-xs">7</Link>
        </div>

        <div className='mt-20 text-5xl mr-auto'>Standing:</div>
        <table className="table mt-20">
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Team Name</div>
                    <div className="text-sm opacity-50">Captain Name</div>
                  </div>
                </div>
              </td>
              <td>
                8 : 0
                <br />
                <span className="badge badge-ghost badge-sm">Draw 1</span>
              </td>
              <td>128 : 4</td>

            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>Red</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>Crimson</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
            </tr>
          </tbody>

        </table>

      </main>
    </>

  )
}

export default cricket