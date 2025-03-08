import React from "react";
import Image from "next/image";
import logo from "./assets/logo.png";
import Link from "next/link";

const Join = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    {/* Circular Image */}
    <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-gray-300">
      <Image src={logo} alt="My Logo" width={160} height={160} className="object-cover" />
    </div>
   
    <div className="flex flex-col items-center justify-center ">
    <input type="text" placeholder="Enter text..." className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    {/* Buttons Section */}
    <div className="flex flex-col items-center justify-center mt-63">
      {/* CREATE Button */}
      <Link href="/create">
        <button className="bg-green-500 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold">
          CREATE
        </button>
      </Link>

      {/* JOIN Button - Wrapped in Link for consistency */}
      <Link href="/join">
        <button className="bg-blue-300 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold mt-5">
          JOIN
        </button>
      </Link>
    </div>

    {/* Footer Text */}
    <div className="h-auto text-center mt-10">
      <p className="p-4">DHONGI - AN ODD ONE OUT GAME</p>
    </div>
  </div>
  )
}

export default Join
