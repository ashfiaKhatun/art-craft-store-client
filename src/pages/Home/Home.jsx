import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HomePageItems from "./HomePageItems";
import SubCategories from "./SubCategories";

const Home = () => {
    return (
        <>
            <Helmet><title>Crafty Corner | Home</title></Helmet>

            <div className="container mx-auto my-10">
                <div>
                    <Banner></Banner>
                </div>
                <div>
                    <HomePageItems></HomePageItems>
                </div>

                <div>
                    <SubCategories></SubCategories>
                </div>

            </div>


        </>
    );
};

export default Home;