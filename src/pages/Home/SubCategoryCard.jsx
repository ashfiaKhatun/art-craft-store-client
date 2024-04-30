import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubCategoryCard = ({ data }) => {

    const {image, title, description } = data;

    return (
        <>
            <Link to={`/all-sub-categories/title/${title}`}>
                <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure><img src={image} alt={title} className='pt-6 h-96'/></figure>
                    <div className="card-body text-blue-950 ">
                        <h2 className="card-title ">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};


SubCategoryCard.propTypes = {
    data: PropTypes.object,
}


export default SubCategoryCard;