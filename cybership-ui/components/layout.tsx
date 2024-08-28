import React from "react";
import Image from "next/image";
import cybershipLogo from "../assets/cybership-logo.jpeg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-center relative p-10">
        <Image
          src={cybershipLogo}
          width={500}
          height={500}
          alt="cybership company logo"
        />
      </div>

      {/* Main content */}
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
