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
            <div className="px-2">
                <div className="max-w-6xl mx-auto rounded-xl bg-base-200 my-8 px-6">
                    <div className="hero-content gap-8 justify-between flex-col md:flex-row">
                        <div className="w-1/2">
                            <img src={photo} className="h-96 rounded-lg shadow-2xl w-full" />

                        </div>

                        <div className="space-y-2 flex-1">
                            <h1 className="text-2xl font-bold">{item_name}</h1>


                            <p><span className="font-bold text-lg">Sub Category: </span>{sub_category}</p>

                            <p className=""><b>Description: </b>{description}</p>

                            <hr className="border-gray-300" />
                            
                            <p className="text-lg"><b>Price: $</b>{price}</p>

                            <hr className="border-gray-300" />

                            <h3 className="text-lg font-bold">Details:</h3>
                            <div className="ml-2 text-gray-600">
                                <p><b>Customizable: </b>{customization}</p>
                                <p><b>Time: </b>{time} days</p>
                                <p><b>Status: </b>{stock_status}</p>
                                <p><b>Rating: </b>{rating}</p>

                            </div>

                            <hr className="border-gray-300" />

                            <p><b>Added By: </b>{name}</p>
                            <p><b>Email: </b>{email}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};


export default Details;