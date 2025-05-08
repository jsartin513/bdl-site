"use client";
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date();
      const diff = targetDate.getTime() - currentTime.getTime();

      if (diff <= 0) {
        setTimeLeft("");
        if (onComplete) onComplete();
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  return <span>{timeLeft}</span>;
};

export default Countdown;