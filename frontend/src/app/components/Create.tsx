import React from "react";
import Image from "next/image";
import logo from "./assets/logo.png";
import Link from "next/link";

const Create = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-gray-300">
        <Image
          src={logo}
          alt="My Logo"
          width={160}
          height={160}
          className="object-cover"
        />
      </div>
      <div className="h-40 flex flex-col items-center justify-center mt-10">
        <Link href="/create">
          <button className="bg-green-500 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold">
            CREATE
          </button>
        </Link>
        <button className="bg-blue-300 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold mt-5">
          JOIN
        </button>
      </div>
      <div className="relative h-[30px]">
        <div className="flex flex-col h-44">
          <p className="mt-auto p-4">DHONGI - AN ODD ONE OUT GAME</p>
        </div>
      </div>
    </div>
  );
}

export default Create
