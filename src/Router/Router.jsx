import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Career from "../Career/Career";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            }

        ]
    },
]);

export default router;