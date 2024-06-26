"use client";
import { useEffect, useState } from "react";


const Countdown = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("04/05/2024 18:00:00");

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
  if (partyTime)
    return null;
  return (
    <div className="grid grid-flow-col gap-4 items-center auto-cols-max justify-center">
      <div className="flex flex-col">
        <span className="countdown text-2xl ml-3">
          {days}
        </span>
        Days
      </div>
      <div className="flex flex-col">
        <span className="countdown text-2xl ml-3">
          {hours}
        </span>
        Hours
      </div>
      <div className="flex flex-col">
        <span className="countdown text-2xl ">
          {minutes}
        </span>
        Min
      </div>
      <div className="flex flex-col">
        <span className="countdown text-2xl">
          {seconds}
        </span>
        Sec
      </div>
    </div>
  );
}

export default Countdown