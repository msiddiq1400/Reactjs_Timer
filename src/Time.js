import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      let interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes > 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  });

  return (
    <div>
      <input
        placeholder="min"
        onChange={(e) => setMinutes(e.target.value)}
        type="number"
      />
      <input
        placeholder="sec"
        onChange={(e) => setSeconds(e.target.value)}
        type="number"
      />
      <button onClick={() => setStart(true)}>Start Timer</button>
      <button onClick={() => setStart(false)}>Stop Timer</button>
      <div>
        {minutes === 0 && seconds === 0 ? (
          <h1>00:00</h1>
        ) : (
          <h1>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Timer;
