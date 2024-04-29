import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyListCard = (props) => {

    const { data, craftItems, setCraftItems } = props;

    const handleItemDelete = () => {
        Swal.fire({
            title: "Are you sure, You want to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allItems/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Spot has been deleted.",
                                icon: "success",
                            });
                            const reamining = craftItems.filter(craftItem => craftItem._id !== data._id);
                            setCraftItems(reamining);
                        }
                    })
            }
        });
    }



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
                    <button onClick={() => handleItemDelete(data._id)} className="btn bg-gray-300 border-red-800 hover:bg-red-800 hover:text-white font-bold">Delete</button>
                </div>
            </div>
        </div>
    );
};

MyListCard.propTypes = {
    props: PropTypes.object,
}

export default MyListCard;