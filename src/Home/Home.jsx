import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreckingNews from "./BreckingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreckingNews></BreckingNews>
            <Navber></Navber>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 text-center border"><h1 className="text-2xl font-bold ">News Coming Soon</h1></div>
                <div className="border"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;