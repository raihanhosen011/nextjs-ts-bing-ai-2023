import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Generate = () => {
  return (
    <div className="flex items-center gap-2 pt-3 w-full">
      <div>
        <AiOutlineCheck className="text-2xl text-green-600" />
      </div>

      <div className="text-sm">Generating answers for you…</div>
    </div>
  );
};

export default Generate;
