import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreckingNews = () => {
    return (
        <div className="flex bg-slate-400 px-3 py-2 rounded-md ">
            <button
                className="btn btn-secondary btn-sm md:btn-md lg:btn-lg"
            >
                Breacking News
            </button>
            <Marquee className=" text-black" pauseOnHover={true} speed={100}>
                I can be a React component, multiple React components, or just some text.
                <Link className="ml-5" to="/">     I can be a React component, multiple React components, or just some text.</Link>
                <Link className="ml-5" to="/">     I can be a React component, multiple React components, or just some text.</Link>
                <Link className="ml-5" to="/">     I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreckingNews;