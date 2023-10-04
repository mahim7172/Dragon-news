
import { Link } from "react-router-dom";
import Navber from "../Shared/Navber";


const Login = () => {
    const handleClickLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email', 'password'))
    }
    return (
        <div>
            <Navber></Navber>
            <div className="mt-10">
                <h1 className="text-3xl text-center font-bold">Please Login</h1>
                <form
                    onSubmit={handleClickLogin}
                    className="md:w-2/3 lg:w-1/2 mx-auto"
                >
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text"
                            >
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text"
                            >
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p
                    className="text-center py-5">
                    Do not have an account
                    <Link
                        className="text-blue-600 font-bold ml-1"
                        to="/register">
                        Please Register
                    </Link></p>
            </div>


        </div>
    );
};

export default Login;