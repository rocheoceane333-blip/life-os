import React from 'react';

export default function Separator({ orientation = "horizontal" }) {
  return (
    <div className={`bg-white/10 ${orientation === "horizontal" ? "h-[1px] w-full my-4" : "w-[1px] h-full mx-4"}`} />
  );
}