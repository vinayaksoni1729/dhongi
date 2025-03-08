import React from "react";
import Image from "next/image";
import logo from "./assets/logo.png";
import Link from "next/link";
import Layout from "./Layout";

const CreateJoin = () => {
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center">
      {/* Buttons Section */}
      <div className="flex flex-col items-center justify-center">
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
    </div>
    </Layout>
  );
};

export default CreateJoin;
