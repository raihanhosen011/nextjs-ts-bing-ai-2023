import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

const ChatBar = () => {
  return (
    <div className="fixed bottom-0 flex justify-center items-center text-center w-full left-0 sm:px-0 px-4 global pb-8 pt-3">
      <form className="w-full sm:w-[80%] relative rounded-full">
     
        <AiOutlineMessage className="absolute left-5 text-2xl top-3 text-gray-700" />
        <textarea
          className="resize-none w-full pl-14 border-none outline-none
          hover:pb-8 transition-all duration-500 ease-in-out px-5 py-3  pr-5 rounded-full shadow scrolls"
          placeholder="Ask me anything..."
          cols={2}
          rows={1}
          maxLength={2000}
        />
      </form>
    </div>
  );
};

export default ChatBar;
