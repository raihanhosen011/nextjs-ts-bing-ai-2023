import Image from "next/image";
import React, { FormEvent, useRef, useState } from "react";
//
import { usePost } from "@hooks/useFetch";
import FromMessage from "./helpers/FromMessage";
import ToMessage from "./helpers/ToMessage";
import ChatBar from "./partials/ChatBar";
import Welcome from "./partials/Welcome";
import { ConversationProps } from "@config/types";


const Home = () => {

  // states
  const [inputData, setInputData] = useState({ title : '', payload : '' })
  const [conversation, setConversation] = useState<Array<ConversationProps>>([])
  const messagesRef = useRef<any>(null);

  // hooks
  const { mutate, isSuccess, isError, error, isLoading, data } = usePost('webhooks/rest/webhook')

  // submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setConversation([...conversation, { sender: "user", response: inputData.title }]);
    setInputData({ title : '', payload : '' })
    await mutate({ message : inputData.payload, sender : {small_id: "110f6497"} }) 
  }

  // button submit
  const handleButtonSubmit = async (payload: any) => {
    setConversation([...conversation, { sender: "user", response: payload.title }]);
    await mutate({ message : payload.title, sender : {small_id: "110f6497"} })
  }

  const scrollToBottom = () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  };

  // effects
  React.useEffect(() => {
    if (isSuccess) {
      setConversation([...conversation, { sender: "bot", response: data.data }]);
      localStorage.setItem("messages", JSON.stringify([...conversation, { sender: "bot", response: data.data }]));
    }else if(isError){
      setConversation([...conversation, { sender: "bot", response: [{ text : "Unfortunately, I'm having some problem 😅. I would appreciate it if you could try again later" }] }]);
      localStorage.setItem("messages", JSON.stringify([...conversation, { sender: "bot", response: [{ text : "Unfortunately, I'm having some problem 😅. I would appreciate it if you could try again later" }] }]));
    }
  }, [isSuccess, isError])
  
  React.useEffect(() => {
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    setConversation(messages);
  }, []);

  React.useEffect(() => {
    scrollToBottom()
  }, [conversation]);


  return (
    <div className="container mx-auto" ref={messagesRef} >
      <Welcome />

      <div className="gap-8 pb-[10rem]" >
        {conversation.map((message, index) => (
          <div className={`${message.sender === 'user' ? 'user-msg lg:w-1/3 w-full ml-auto' : 'bot-msg w-full lg:w-2/3 order-1'} w-full`} key={index}>
            {message.sender === 'user' ? (
              <ToMessage response={message.response} />
            ) : (
              <>
                <FromMessage response={message.response[0]} handleButtonSubmit={handleButtonSubmit} />
              </>
            )}
          </div>
        ))}

        {isLoading && <div className=" w-full lg:w-2/3 order-1" >
          <div className="h-[35px] w-[70px] bg-white shadow rounded-[7px] overflow-hidden relative" > 
            <Image src='/img/gif/loading.gif' layout='fill' objectFit='contain' />
          </div>
        </div>}
      </div>

      <ChatBar handleSubmit={handleSubmit} setInputData={setInputData} inputData={inputData} />
    </div>
  );
};

export default Home;