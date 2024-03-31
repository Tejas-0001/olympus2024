"use client";
import { useEffect, useState } from "react";


const countdown = () => {
    const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("04/01/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      {days}
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      {hours}
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      {minutes}
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      {seconds}
    </span>
    sec
  </div>
</div>
  );
}

export default countdown