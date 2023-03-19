import Image from "next/image";
import React from "react";
//
import mainLogo from "../../../../public/img/brand.png";

const Welcome = () => {
  return (
    <div className="flex h-[500px] flex-col gap-3 text-center justify-center">
      <div className="w-[100px] md:w-[150px] mx-auto md:mb-7" >
        <Image src={mainLogo} className="object-cover" width={1} height={1} layout='responsive' alt="chat logo" />
      </div>

      <h2 className="text-[18px] md:text-[36px] font-[600] mb-[-7px] md:mb-[-12px]">Powerful search engine for your enterprise.</h2>
      <p className="text-[15px] md:text-[18px] font-[400]">
        Your AI-powered copilot for the web
      </p>
    </div>
  );
};

export default Welcome;
