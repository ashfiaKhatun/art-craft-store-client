import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
    return (
        <>
            <Helmet><title>Crafty Corner | Home</title></Helmet>

            <div>
                <Banner></Banner>
            </div>


        </>
    );
};

export default Home;