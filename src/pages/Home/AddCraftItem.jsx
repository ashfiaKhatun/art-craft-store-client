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
                <title>Add Craft and Art Item </title>
            </Helmet>


            <div className="bg-gray-100 mt-6 p-8 lg:p-24">
                <div className='flex items-center gap-8'>
                    <div>
                        <h2 className=" text-center text-xl md:text-3xl font-extrabold text-blue-950">Add Craft and Art Item</h2>

                    </div>
                    <div className="text-sm md:text-lg text-cyan-800 w-28 md:w-72 h-5">
                        <Typewriter words={typeWriterArray} loop={true} cursor={true} />
                    </div>
                </div>

                {
                    loader ? <div className='mt-6 w-full text-center'><span className="loading loading-spinner loading-lg"></span></div> :

                        <form className="space-y-4 mt-6" onSubmit={handleAddCraftItem}>


                            <div className="grid lg:grid-cols-2 gap-4">
                                <div>
                                    <label className="label-text text-base">Item Name</label>
                                    <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered w-full mt-2 border-2 border-cyan-800 border-opacity-40" />
                                </div>

                                <div>
                                    <label className="label-text text-base">Subcategory Name</label>
                                    <select className="select border-2 border-cyan-800 border-opacity-40 w-full mt-2" name='sub_category'>
                                        <option></option>
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
                                    <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                                </div>

                                <div>
                                    <label className="label-text text-base">Price</label>
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                                </div>

                                <div>
                                    <label className="label-text text-base">Customization</label>
                                    <select className="select border-2 border-cyan-800 border-opacity-40 mt-2 w-full" name='customization'>
                                        <option></option>
                                        <option>Yes</option>
                                        <option>No</option>

                                    </select>
                                </div>

                                <div>
                                    <label className="label-text text-base">Processing Time</label>
                                    <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                                </div>

                                <div>
                                    <label className="label-text text-base">Stock Status</label>
                                    <select className="select border-2 border-cyan-800 border-opacity-40 mt-2 w-full" name='stock_status'>
                                        <option></option>
                                        <option>In Stock</option>
                                        <option>Made to Order</option>

                                    </select>
                                </div>

                                <div>
                                    <label className="label-text text-base">Rating</label>
                                    <select className="select border-2 border-cyan-800 border-opacity-40 mt-2 w-full" name='rating'>
                                        <option></option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </select>
                                </div>

                                <div className="lg:col-span-2">
                                    <label className="label-text text-base">Photo URL</label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                                </div>

                                <div>
                                    <label className="label-text text-base">User Email</label>
                                    <input type="text" name="email" defaultValue={user.email} placeholder="User Email" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                                </div>

                                <div>
                                    <label className="label-text text-base">User Name</label>
                                    <input type="text" name="name" defaultValue={user.displayName} placeholder="User Name" className="input input-bordered w-full border-2 border-cyan-800 border-opacity-40 mt-2" />
                                </div>
                                
                                <input type="submit" value="Add Item" className="btn btn-block bg-cyan-800 hover:bg-transparent hover:text-cyan-800 hover:border-cyan-800 text-white lg:col-span-2" />
                            </div>


                        </form>
                }

            </div>
        </>
    );
};

export default AddCraftItem;