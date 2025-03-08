import React from "react";
import Layout from "../components/Layout"; // Adjust path as needed
import Link from "next/link";

const Test = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Link href="/join">
          <button className="bg-green-500 h-[84px] w-[274px] rounded-2xl text-[32px] font-bold">
            CREATE
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Test;
