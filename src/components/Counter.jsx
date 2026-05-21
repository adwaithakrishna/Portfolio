


import React, { useState,useEffect } from "react";


function Counter() {
  const [count,setCount] = useState(0);
  const [value, setValue] = useState(1);

  function Increment() {
      setCount(count + Number(value));
  }

  function Decrement() {
    if(count>0){
      setCount(count - Number(value));
  }
  }

  function Reset() {
    setCount(0);
  }
useEffect(()=>{
      console.log('count changed to ',count)
  },[count]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-950 via-yellow-700 to-black px-4">

      {/* Counter Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-lg">

        {/* Title */}
        <h1 className="mb-8 text-center text-4xl font-bold text-yellow-300">
          Multiplication
        </h1>

        {/* Count Display */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-yellow-400 bg-black/30 shadow-[0_0_40px_rgba(250,204,21,0.5)]">
            
            <span className="text-6xl font-bold text-white">
              {count}
            </span>

          </div>
        </div>

         <div className="mb-4 flex flex-col gap-2">
          <label className="text-white">Value</label>

          <input type="number" value={value} onChange={(x) => setValue(x.target.value)} className="rounded-lg p-2 text-black"
          />
        </div>
        {/* Buttons */}
        <div className="flex flex-col gap-4">

          <button
            onClick={Increment}
            className="rounded-xl bg-green-500 py-3 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-green-400"
          >
            Increment
          </button>

          <button
            onClick={Decrement}
            className="rounded-xl bg-yellow-500 py-3 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-yellow-400"
          >
            Decrement
          </button>

          <button
            onClick={Reset}
            className="rounded-xl bg-red-500 py-3 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-red-400"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default Counter;