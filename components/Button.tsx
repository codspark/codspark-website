import React from 'react'

function Button() {
  return (
    <button className="
    relative
    px-6 py-3
    font-semibold text-white
    rounded-full
    bg-[#FE6A03]
    shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_8px_20px_rgba(0,0,0,0.25)]
    hover:scale-105
    active:scale-95
    transition-all duration-300
    overflow-hidden
    ">
    <span className="relative z-10">Contact Now</span>

    {/* glossy highlight */}
    <span className="
        absolute top-1 left-2
        w-2/3 h-1/2
        bg-white/40
        rounded-full
        blur-md
    "></span>
    </button>

  )
}

export default Button
