import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftItemsCard from "./CraftItemsCard";
import { Fade } from "react-awesome-reveal";

const AllCraftItems = () => {

    const loadedData = useLoaderData();

    return (
        <>

            <Helmet><title>All Craft Items</title></Helmet>
            <div className="mt-6 md:mt-16 max-w-6xl mx-auto">
                <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-12">All Craft Items</h1>

                <div className="grid md:grid-cols-3 px-2 gap-4 md:gap-8 my-6">
                    <Fade>
                        {
                            loadedData.map(data => <CraftItemsCard key={data._id} data={data}></CraftItemsCard>)
                        }
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default AllCraftItems;