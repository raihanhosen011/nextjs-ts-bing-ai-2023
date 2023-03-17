import type { NextPage } from "next";
//
import HomePage from "@modules/Chat";

const Home: NextPage = () => {
    return (
        <>
            <div className="__home">
                 <HomePage />
            </div>
        </>
    );
};

export default Home;
