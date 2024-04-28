import { Link } from "react-router-dom";

const CraftItemsCard = ({ data }) => {

    const {
        _id,
        item_name,
        sub_category,
        price,
        time,
        rating,
        photo
    } = data;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/item-details/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CraftItemsCard;