import React, { ChangeEvent } from "react";
//
import { icons } from "@libs/Icons";
import { ChatBarProps } from "@config/types";


const ChatBar : React.FC<ChatBarProps> = ({ handleSubmit, setInputData, inputData }) => {
  return (
    <div className="fixed bottom-0 flex justify-center items-center text-center w-full left-0 chat-bar-wrapper pb-8 pt-3">
      <div className="container" >

        <form 
          className="w-full bg-white relative rounded-full flex items-center resize-none gap-3 border-none outline-none transition-all duration-500 ease-in-out px-5 py-4 shadow scrolls"
          onSubmit={handleSubmit}
        >

          <span className="text-2xl top-3 text-gray-700" >{icons.message}</span>

          <input
            className="w-full h-full bg-transparent outline-none resize-none border-none text-gray-700"
            placeholder="Ask me anything..."
            onChange={(e:ChangeEvent<HTMLInputElement>) => setInputData({ title : e.target.value, payload : e.target.value })}
            value={inputData.title}
          />

          {inputData.title.length > 0 && <button
            className="text-2xl top-3 text-[#25a059]"
          >
            {icons.send}
          </button>}

        </form>

      </div>
    </div>
  );
};

export default ChatBar;
