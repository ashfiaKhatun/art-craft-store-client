import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import SubCategoryCard from "./SubCategoryCard";


const SubCategories = () => {
    const [newdata, setNewData] = useState([]);


    useEffect(() => {
        fetch("https://art-craft-store-server-murex.vercel.app/all-sub-categories")
            .then(res => res.json())
            .then(data => setNewData(data))
    }, [])


    const typeWriterArray = ['Landscape Painting', 'Portrait Drawing', 'Watercolour Painting', 'Oil Painting', 'Charcoal Sketching', 'Cartoon Drawing'];

    return (
        <div>
            <div className="flex justify-center my-8 w-96 h-12 md:w-full">
                <h2 className="text-2xl md:text-4xl  "><Typewriter words={typeWriterArray} loop={true} cursor={true}></Typewriter></h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">


                <Fade>
                    {
                        newdata.map(data => <SubCategoryCard key={data._id} data={data}></SubCategoryCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default SubCategories;


/* 


import CountryCard from "./CountryCard";




const ShowCountry = () => {


    
};


export default ShowCountry;



*/