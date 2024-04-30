import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import HomeItemCard from "./HomeItemCard";


const HomePageItems = () => {
    const [newdata, setNewData] = useState([]);


    useEffect(() => {
        fetch("https://art-craft-store-server-murex.vercel.app/allItems")
            .then(res => res.json())
            .then(data => {
                if (data.length > 6) {
                    setNewData(data.slice(0, 6))
                }
                else {
                    setNewData(data)
                }
            })
    }, [])


    const typeWriterArray = ['Earth without Art is just Eh!'];


    return (
        <div>
            <div className="flex justify-center my-8 w-96 h-12 md:w-full">
                <h2 className="text-2xl md:text-4xl  "><Typewriter words={typeWriterArray} loop={true} cursor={true}></Typewriter></h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">


                <Fade>
                    {
                        newdata.map(data => <HomeItemCard key={data._id} data={data}></HomeItemCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default HomePageItems;