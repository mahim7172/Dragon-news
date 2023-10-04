import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className="space-y-4">
            <h1 className="text-xl font-medium ml-3 mt-3">Left Side Nav  </h1>
            <hr />
            {
                category.map(categor =>
                    <Link
                        to={`/category/${categor.id}`}
                        className="block ml-3 font-medium  text-base"
                        key={categor.id}
                    >{categor.name}
                    </Link>
                )
            }

        </div>
    );
};

export default LeftSideNav;