import { useContext } from "react";
import { AuthContext } from "../../Components/Context/AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    console.log(location.pathname)
    const { user, loding } = useContext(AuthContext)
    if (loding) {
        return (
            <div className="text-center flex items-center justify-center h-[80vh]"><span className="loading loading-bars loading-lg"></span></div>
        )
    }
    if (user) {
        return children;
    }



    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivateRoute;