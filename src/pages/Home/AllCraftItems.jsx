import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftItemsCard from "./CraftItemsCard";

const AllCraftItems = () => {

    const loadedData = useLoaderData();

    return (
        <>

            <Helmet><title>All Craft Items</title></Helmet>
            <div>
                <h1>Info about craft</h1>

            </div>
            <div>
                {
                    loadedData.map(data => <CraftItemsCard key={data._id} data={data}></CraftItemsCard>)
                }
            </div>
        </>
    );
};

export default AllCraftItems;