import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const page = () => {
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center">
      {/* Buttons Section */}
      <div className="flex flex-col items-center justify-center">
      <div className="font-bold text-[24px]">
          <p>Your word is</p>
        </div>
        
        <div className="text-[60px] font-bold text-pink-300 w-[20vh]">
          <h1>Lionel Messi</h1>
        </div>
        {/* CREATE Button */}
        <Link href="/gamePage">
          <button className="bg-blue-300 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold">
            NEXT ROUND
          </button>
        </Link>

        {/* JOIN Button - Wrapped in Link for consistency */}
        <Link href="/">
          <button className="bg-red-500 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold mt-5">
            END GAME
          </button>
        </Link>
      </div>
    </div>
    </Layout>
  )
}

export default page
