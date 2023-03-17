import React from "react";
import FromMessage from "./helpers/FromMessage";
import Generate from "./helpers/Generate";
import Result from "./helpers/Result";
import ToMessage from "./helpers/ToMessage";
import ChatBar from "./partials/ChatBar";
import Welcome from "./partials/Welcome";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Welcome />

      <div className="flex gap-8 flex-col-reverse pb-[10rem]">
        <div className=" lg:w-2/3 w-full">
          <Result />
          <Generate />
          <FromMessage />
        </div>
        <div className="w-full order-1">
          <ToMessage />
        </div>
      </div>
     

      <ChatBar />
    </div>
  );
};

export default Home;
