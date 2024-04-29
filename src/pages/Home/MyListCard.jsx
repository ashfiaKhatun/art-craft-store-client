import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyListCard = (props) => {

    const { data, craftItems, setCraftItems } = props;

    return (
        <div className="card card-compact shadow-xl border">
            <figure className="p-4"><img src={data.photo} className="rounded-lg h-44 w-full" /></figure>

            <div className="card-body">
                <h2 className="card-title">{data.item_name}</h2>

                <hr />
                <div className="flex items-center text-lg">
                    <p className="text-gray-700 ">{data.sub_category}</p>
                    <p className="text-right"><b>Price: {data.price}</b></p>

                </div>
                <hr />
                <p className="text-gray-700 ">Rating: {data.rating}</p>
                <p className="text-gray-700 ">Time: {data.time} days</p>

                <div className="card-actions">
                    <Link to={`/update-item/${data._id}`}><button className="btn bg-gray-300 border-cyan-800 hover:bg-cyan-800 hover:text-white font-bold">Update</button></Link>
                    <button className="btn bg-gray-300 border-red-800 hover:bg-red-800 hover:text-white font-bold">Delete</button>
                </div>
            </div>
        </div>
    );
};

MyListCard.propTypes = {
    data: PropTypes.object,
}

export default MyListCard;