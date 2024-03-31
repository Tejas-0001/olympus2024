import Image from "next/image";
import { useEffect, useState } from "react";
import Countdown from "./components/countdown";

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Olympus</h1>
     <Countdown/>
    </main>
  );
}
