import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreckingNews from "./BreckingNews";
import NewsCart from "../Components/News/NewsCart";


const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Header></Header>
            <BreckingNews></BreckingNews>
            <Navber></Navber>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div
                    className="md:col-span-2 text-center ">
                    {
                        data.map(news => <NewsCart key={news.id} news={news} ></NewsCart>)
                    }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;