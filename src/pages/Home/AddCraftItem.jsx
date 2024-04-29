import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddCraftItem = () => {

    const { loader, user } = useContext(AuthContext);
    const typeWriterArray = ['Earth without art is just Eh!'];

    const handleAddCraftItem = e => {
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

        fetch('http://localhost:5000/allItems', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(craftInfo)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Item Added Successfully",
                });
            })

        form.reset();

    }

    return (
        <>
            <Helmet>
                <title>Add Tourist Spot </title>
            </Helmet>


            <div className="bg-gray-100 mt-6 p-24">
                <div className='flex items-center gap-8'>
                    <div>
                        <h2 className="w-44 lg:w-64 text-center text-xl md:text-3xl font-extrabold text-blue-950">Add Tourist Spot</h2>


                    </div>
                    <div className="text-sm md:text-lg text-cyan-800 w-28 md:w-72 h-5">
                        <Typewriter words={typeWriterArray} loop={true} cursor={true} />
                    </div>
                </div>

                {
                    loader ? <div className='mt-6 w-full text-center'><span className="loading loading-spinner loading-lg"></span></div> :

                        <form className="space-y-4 mt-6" onSubmit={handleAddCraftItem}>
                            {/* Form Row */}
                            <div className="md:flex items-center space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Item Name</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>


                                <div className=" md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Subcategory Name</span>
                                    </label>
                                    <select className="select border-2 border-blue-300 w-full" name='sub_category'>
                                        <option></option>
                                        <option>Landscape Painting</option>
                                        <option>Portrait Drawing</option>
                                        <option>Watercolor Painting</option>
                                        <option>Oil Painting</option>
                                        <option>Charcoal Sketching</option>
                                        <option>Cartoon Drawing</option>
                                    </select>
                                </div>
                            </div>


                            {/* Form Row */}
                            <div className="md:flex space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Short Description</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>


                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Price</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>

                            {/* Form Row */}
                            <div className="md:flex space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Customization</span>
                                    </label>
                                    <select className="select border-2 border-blue-300 w-full" name='customization'>
                                        <option></option>
                                        <option>Yes</option>
                                        <option>No</option>

                                    </select>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Processing Time</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>


                            {/* Form Row */}
                            <div className="md:flex space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">Stock Status</span>
                                    </label>
                                    <select className="select border-2 border-blue-300 w-full" name='stock_status'>
                                        <option></option>
                                        <option>In Stock</option>
                                        <option>Made to Order</option>

                                    </select>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">Rating</span>
                                    </label>
                                    <select className="select border-2 border-blue-300 w-full" name='rating'>
                                        <option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </select>
                                </div>

                            </div>

                            {/* Form Row */}
                            <div className="space-y-4 md:space-y-0" >
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base">Photo URL</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>


                            </div>

                            {/* Form Row */}
                            <div className="md:flex space-y-4 md:space-y-0">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-base">User Email</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="email" defaultValue={user.email} placeholder="User Email" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>

                                <div className="form-control md:w-1/2 md:ml-4">
                                    <label className="label">
                                        <span className="label-text text-base">User Name</span>
                                    </label>
                                    <label className="input-group ">
                                        <input type="text" name="name" defaultValue={user.displayName} placeholder="User Name" className="input input-bordered w-full border-2 border-blue-300" />
                                    </label>
                                </div>
                            </div>

                            <input type="submit" value="Add Item" className="btn btn-block bg-primary text-white" />

                        </form>
                }

            </div>
        </>
    );
};

export default AddCraftItem;