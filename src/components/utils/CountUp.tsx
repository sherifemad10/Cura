import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1);
      const currentCount = progress * (end - start) + start;
      
      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [start, end, duration]);

  const formatNumber = (num: number) => {
    return prefix + num.toFixed(decimals) + suffix;
  };

  return <>{formatNumber(count)}</>;
};

export default CountUp;