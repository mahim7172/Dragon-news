import { Link } from "react-router-dom";


const NewsCart = ({ news }) => {
    const { title, details, thumbnail_url, image_url, _id } = news;
    return (
        <div>
            <div className="card bg-base-100 ">

                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)} <Link to={`/news/${_id}`}
                                className="text-blue-600 font-medium">Read More...</Link> </p>
                            :
                            <p>{details}</p>
                    }



                </div>
            </div>
        </div>
    );
};

export default NewsCart;