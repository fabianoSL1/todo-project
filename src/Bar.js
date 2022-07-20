import { useState, useRef, useEffect } from 'react';

const Bar = () => {
  const [activate, setActivate] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);

  const tabsRef = useRef([]);

  const labels = ['all', 'activate', 'complete'];

  const tabs = labels.map((label, index) => {
    return (
      <button
        key={index}
        ref={(el) => (tabsRef.current[index] = el)}
        onClick={() => setActivate(index)}
        className='capitalize px-6 py-3 font-semibold w-1/3'
      >
        {label}
      </button >
    )
  });

  useEffect(() => {
    const current = tabsRef.current[activate];
    setTabLeft(current?.offsetLeft);
    setTabWidth(current?.clientWidth);
  }, [activate])

  return (
    <div className='border-solid border-b border-b-gray-400 flex justify-around gap-7 mt-4 relative'>
      {tabs}
      <div className='absolute bottom-0 h-1.5 bg-blue-500 rounded-t-2xl transition-all'
        style={{ left: tabLeft, width: tabWidth }}
      ></div>
    </div>
  )
}

export default Bar;
