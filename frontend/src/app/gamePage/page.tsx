"use client"; // Required for Next.js 13+ App Router

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../components/Layout";

const Page = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10); // 10-second countdown

  useEffect(() => {
    // Countdown Timer
    const countdown = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000); // Update every second

    // Redirect after 10 seconds
    const timer = setTimeout(() => {
      router.push("/gameEnd"); // Redirect to /gameEnd
    }, 10000); // 10 seconds (10,000ms)

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        {/* Countdown Timer */}
        <div className="text-red-500 text-2xl font-bold mb-4">
          Round Ends in {timeLeft} seconds...
        </div>

        <div className="font-bold text-[24px]">
          <p>Your word is</p>
        </div>
        
        <div className="text-[60px] font-bold text-pink-300 w-[20vh]">
          <h1>Lionel Messi</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
