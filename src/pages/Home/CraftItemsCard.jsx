import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

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
        <div className="card card-compact shadow-xl border">
            <figure className="p-4"><img src={photo} className="rounded-lg h-44 w-full" /></figure>

            <div className="card-body">
                <h2 className="card-title">{item_name}</h2>

                <hr />
                <div className="flex items-center text-lg">
                    <p className="text-gray-700 ">{sub_category}</p>
                    <p className="text-right"><b>Price: {price}</b></p>

                </div>
                <hr />
                <p className="text-gray-700 ">Rating: {rating}</p>
                <p className="text-gray-700 ">Time: {time} days</p>

                <div className="card-actions justify-end">
                    <Link to={`/item-details/${_id}`}><button className="btn bg-gray-300 border-cyan-800 hover:bg-cyan-800 hover:text-white font-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

CraftItemsCard.propTypes = {
    data: PropTypes.object,

}

export default CraftItemsCard;