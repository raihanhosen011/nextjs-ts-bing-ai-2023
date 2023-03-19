import Image from "next/image";
import React from "react";
import mainLogo from "../../../../public/img/bing_logo.png";

const Welcome = () => {
  return (
    <div className="flex h-[500px] flex-col gap-3 text-center justify-center">
      <div>
        <Image src={mainLogo} className="object-cover" width={30} height={40} alt="chat logo" />
      </div>
      <h2 className="text-[36px] font-[600]">Welcome to the new Bing</h2>
      <p className="text-[18px] font-[400]">
        Your AI-powered copilot for the web
      </p>
    </div>
  );
};

export default Welcome;
