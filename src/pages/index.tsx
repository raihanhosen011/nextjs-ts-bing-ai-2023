import { v4 as uuidv4 } from "uuid";
import type { NextPage } from "next";
//
import HomePage from "@modules/Chat";

const Home: NextPage = () => {

    // sender _id
    const sender_id = uuidv4().slice(0, 8);

    return (
        <>
            <div className="__home">
                 <HomePage sender_id={sender_id} />
            </div>
        </>
    );
};

export default Home;
