import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {

    const loadedData = useLoaderData();

    const navigate = useNavigate();

    const {
        _id,
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

    const handleUpdateCraftItem = e => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const sub_category = form.sub_category.value;
        const description = form.description.value;
        const price = form.price.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock_status = form.stock_status.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const name = form.name.value;

        const craftInfo = {
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
        }

        fetch(`https://art-craft-store-server-murex.vercel.app/allItems/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(craftInfo)
        })
            .then(res => res.json())
            .then((data) => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Spot Updated Successfully",
                    });
                }

            })

        navigate(`/my-craft-list/email/${email}`)
    }

    return (
        <div className="p-8 lg:p-24">
            <h2 className="text-2xl font-bold">Update Item Info</h2>
            <form className="space-y-4 mt-6" onSubmit={handleUpdateCraftItem}>

                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <label className="label-text text-base">Item Name</label>
                        <input type="text"  defaultValue={item_name} name="item_name" placeholder="Item Name" className="input input-bordered w-full mt-2 border-2 border-cyan-800 border-opacity-40" />
                    </div>

                    <div>
                        <label className="label-text text-base">Subcategory Name</label>
                        <select className="select border-2 border-cyan-800 border-opacity-40 w-full mt-2" name='sub_category'>
                            <option>{sub_category}</option>
                            <option>Landscape Painting</option>
                            <option>Portrait Drawing</option>
                            <option>Watercolor Painting</option>
                            <option>Oil Painting</option>
                            <option>Charcoal Sketching</option>
                            <option>Cartoon Drawing</option>
                        </select>
                    </div>

                    <div>
                        <label className="label-text text-base">Short Description</label>
                        <input type="text" defaultValue={description} name="description" placeholder="Short Description" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                    </div>

                    <div>
                        <label className="label-text text-base">Price</label>
                        <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                    </div>

                    <div>
                        <label className="label-text text-base">Customization</label>
                        <select className="select border-2 border-cyan-800 border-opacity-40 mt-2 w-full" name='customization'>
                            <option>{customization}</option>
                            <option>Yes</option>
                            <option>No</option>

                        </select>
                    </div>

                    <div>
                        <label className="label-text text-base">Processing Time</label>
                        <input type="text" defaultValue={time} name="time" placeholder="Processing Time" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                    </div>

                    <div>
                        <label className="label-text text-base">Stock Status</label>
                        <select className="select border-2 border-cyan-800 border-opacity-40 mt-2 w-full" name='stock_status'>
                            <option>{stock_status}</option>
                            <option>In Stock</option>
                            <option>Made to Order</option>

                        </select>
                    </div>

                    <div>
                        <label className="label-text text-base">Rating</label>
                        <select className="select border-2 border-cyan-800 border-opacity-40 mt-2 w-full" name='rating'>
                            <option>{rating}</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </select>
                    </div>

                    <div className="lg:col-span-2">
                        <label className="label-text text-base">Photo URL</label>
                        <input type="text" defaultValue={photo} name="photo" placeholder="Photo URL" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                    </div>

                    <div>
                        <label className="label-text text-base">User Email</label>
                        <input type="text" name="email" defaultValue={email} placeholder="User Email" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                    </div>

                    <div>
                        <label className="label-text text-base">User Name</label>
                        <input type="text" name="name" defaultValue={name} placeholder="User Name" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                    </div>

                    <input type="submit" value="Add Item" className="btn btn-block bg-cyan-800 hover:bg-transparent hover:text-cyan-800 hover:border-cyan-800 text-white lg:col-span-2" />
                </div>

            </form>
        </div>
    );
};

export default UpdateItem;