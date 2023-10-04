import { useParams } from "react-router-dom";
import Header from "../../Shared/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import Navber from "../../Shared/Navber";


const MoreNews = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navber> </Navber>

            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1>News Details</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default MoreNews;