import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import SubCategoryItemCard from "./SubCategoryItemCard";

const SubCategoryItems = () => {
    const loaderData = useLoaderData();

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-6">
                <Fade>
                    {
                        loaderData.map(data => <SubCategoryItemCard key={data._id} data={data}></SubCategoryItemCard>)
                    }
                </Fade>
            </div>
        </div>
    );
};

export default SubCategoryItems;
