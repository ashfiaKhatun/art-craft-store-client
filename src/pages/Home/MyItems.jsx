import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyListCard from "./MyListCard";
import { useState } from "react";

const MyItems = () => {

    const loadedData = useLoaderData();

    const [craftItems, setCraftItems] = useState(loadedData);

    return (
        <>
            <Helmet><title>My List</title></Helmet>
            <div className="grid md:grid-cols-3 px-2 gap-4 md:gap-8 my-6">
                {
                    craftItems.map(data => <MyListCard key={data._id} data={data} craftItems={craftItems} setCraftItems={setCraftItems}></MyListCard>)
                }
            </div>
        </>
    );
};

export default MyItems;