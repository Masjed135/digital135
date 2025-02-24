'use client'
import { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

type CountdownTimerProps = {
  targetDate: string;
};

export default function Countdown({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
<>
      {timeLeft ? (
         <div className="p-4 bg-gray-100 rounded-xl shadow-md w-80 text-center">
      <h2 className="text-xl font-bold mb-2">شمارش معکوس</h2>
        <div className="text-lg font-semibold">
          {timeLeft.days} روز | {timeLeft.hours} ساعت | {timeLeft.minutes} دقیقه | {timeLeft.seconds} ثانیه
        </div>
        </div>
      ) : (
        <></>
      )}
 </>
  );
}
