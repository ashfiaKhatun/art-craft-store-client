import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const MyItems = () => {

    const loadedData = useLoaderData();


    return (
        <>
            <Helmet><title>My List</title></Helmet>
            <div>
                {
                    loadedData.map(data => <div key={data._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{data.item_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </>
    );
};

export default MyItems;