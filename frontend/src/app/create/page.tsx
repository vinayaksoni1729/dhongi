import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Create = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-[32px] text-pink-200">
          <p>unique__code</p>
        </div>
        <div className="text-[128px] font-bold">
          <h1>4</h1>
        </div>
        <div className="text-[24px] font-bold">
          <h1>players joined</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          {/* CREATE Button */}
          <Link href="/gamePage">
            <button className="bg-green-500 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold">
              START
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
