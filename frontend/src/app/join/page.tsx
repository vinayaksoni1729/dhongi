import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

const Join = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center ">
          <input
            type="text"
            placeholder="Enter text..."
            className="border border-purple-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 w-[45vh]"
          />
        </div>
        {/* Buttons Section */}
        <div className="flex flex-col items-center justify-center mt-20 ">
          {/* JOIN Button - Wrapped in Link for consistency */}
          <Link href="/waitingUser">
            <button className="bg-blue-300 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold mt-5">
              JOIN
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Join;
