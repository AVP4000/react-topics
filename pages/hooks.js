import React, { useEffect, useState } from 'react';

export default function Hooks() {
  const [stateHook, setStateHook] = useState('State Hook Default Value');

  // useEffect will start the timer and after the component renders, will rerender after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me!');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{stateHook}</div>;
}
