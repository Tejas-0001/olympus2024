import Image from "next/image";
import { useEffect, useState } from "react";
import Countdown from "./components/countdown";

export default function Home() {


  return (
    <>
      <video className="absolute mt-4 p-0 w-full h-screen object-cover -z-10" src="2K24.mp4" autoPlay loop muted></video>
      <main className="flex min-h-screen flex-col-reverse items-center justify-between p-10 ">
        <div className="flex w-auto h-auto flex-col items-center">
          <div className="rounded-3xl p-4 text-white">
            <Countdown />
          </div>
          <div>
            <h1 className="-mb-4 text-blue-300 rounded-xl p-2 font-bold text-2xl animate-bounce">OLYMPUS KICK OFF</h1>
          </div>
        </div>
      </main>
    </>
  );
}
