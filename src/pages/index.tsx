import type { NextPage } from "next";
//
import ChatPage from "@modules/Chat";

const Home: NextPage = () => {
    return (
        <>
            <div className="__home">
                 <ChatPage />
            </div>
        </>
    );
};

export default Home;
