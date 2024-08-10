import React from 'react';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const AnimatedCounter = ({ endValue, duration }) => {

  const count = useAnimatedCounter(endValue, duration);

  return (
    <div >
      {count}
    </div>
  );
};

export default AnimatedCounter;
