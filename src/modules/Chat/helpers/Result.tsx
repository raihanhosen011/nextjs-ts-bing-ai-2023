import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Result = () => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div>
        <AiOutlineCheck className="text-2xl text-green-600" />
      </div>

      <div className="text-sm">
        Searching for: <strong>Dynamic text here</strong>{" "}
      </div>
    </div>
  );
};

export default Result;
