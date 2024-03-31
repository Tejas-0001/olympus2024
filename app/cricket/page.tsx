import Image from 'next/image'
import React from 'react'

const cricket = () => {
  return (
    <>
      <video className="absolute m-0 p-0 w-full h-screen object-cover -z-10" src="cricket-bg-video.mp4" autoPlay loop muted></video>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[rgba(0,0,0,.4)]">
        <Image src="/cricket.png" width={200} height={300} alt='Cricket Logo'></Image>
        <Image src="/kratos.png" width={200} height={80} alt='Cricket event name'></Image>
        <div className="card w-96 glass">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Runs</div>
            <div className="stat-value">412</div>
            <div className="stat-desc">Balls Played 158</div>
          </div>

          <div className="stat">
            <div className="stat-title">Highest Run</div>
            <div className="stat-value text-secondary">93</div>
            <div className="stat-desc">Not Out</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Strike Rate</div>

          </div>

        </div>
        <div className="stats shadow">

          <div className="stat">
            <div className="stat-title">Wickets</div>
            <div className="stat-value text-primary">12</div>
            <div className="stat-desc">LBW 4</div>
          </div>

          <div className="stat">
            <div className="stat-title">Balls</div>
            <div className="stat-value text-secondary">93</div>
            <div className="stat-desc">Maiden 0</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">3.2</div>
            <div className="stat-title">Economy</div>

          </div>

        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>

  )
}

export default cricket