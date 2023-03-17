import React from "react";
import Tag from "./Tag";

const LearnMoreWithTag = () => {
  return (
    <div className="border-t p-3 flex-wrap flex items-center gap-2">
      <div className="text-sm">
        <strong>Learn more :</strong>
      </div>
      <Tag />
    </div>
  );
};

export default LearnMoreWithTag;
