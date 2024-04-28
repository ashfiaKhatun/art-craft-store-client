import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Details = () => {

    const loadedData = useLoaderData();

    const {
        item_name,
        sub_category,
        description,
        price,
        customization,
        time,
        stock_status,
        rating,
        photo,
        email,
        name
    } = loadedData;

    return (
        <>
            <Helmet><title>Details</title></Helmet>
            <h2>{item_name}</h2>
        </>
    );
};

export default Details;