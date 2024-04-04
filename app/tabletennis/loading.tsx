import React from 'react'

const loading = () => {
  return (
    <>
      <video className="absolute m-0 p-0 w-full h-screen object-cover -z-10" src="cricket-bg-video-cc.mp4" autoPlay loop muted></video>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"><h1>Loading</h1>
        {/* <span className="loading loading-dots loading-lg"></span> */}
      </main>
    </>
  )
}

export default loading