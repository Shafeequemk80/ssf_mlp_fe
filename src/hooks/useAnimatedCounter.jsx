import {useState, useEffect} from 'react';

const useAnimatedCounter = (endValue, duration) => {
  const [count, setCount] = useState (0);

  useEffect (
    () => {

      let endnum = 0;
      
      if (endValue > 1500) {
        endnum = 1500;
      } else {
        endnum = 0;
      }
      
      let start = endnum;
      
      const incrementTime = Math.floor (duration / endValue);

      const counter = setInterval (() => {
        start += 1;
        setCount (start);
        if (start === endValue) {
          clearInterval (counter);
        }
      }, incrementTime);

      return () => clearInterval (counter);
    },
    [endValue, duration]
  );

  return count;
};

export default useAnimatedCounter;
