import React from "react";
import Image from "next/image";
import logo from "./assets/logo.png"; // Adjust path as needed

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[90vh]">
      {/* Fixed Logo */}
      <div className="absolute top-10">
        <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-gray-300">
          <Image src={logo} alt="Logo" width={160} height={160} className="object-cover" />
        </div>
      </div>

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center w-full h-full mt-40">
        {children} {/* Dynamic content for each page */}
      </div>

      {/* Static Footer Text */}
      <div className="absolute bottom-5 text-center">
        <p className="p-4 font-bold text-lg">DHONGI - AN ODD ONE OUT GAME</p>
      </div>
    </div>
  );
};

export default Layout;
