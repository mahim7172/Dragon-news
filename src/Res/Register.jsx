import { Link } from "react-router-dom";
import Navber from "../Shared/Navber";

import { AuthContext } from "../Components/Context/AuthProvaider";
import { useContext } from "react";


const Register = () => {


    const { createUser } = useContext(AuthContext)



    const handleClickRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password, name, photo)
        // create user
        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <div>

            <Navber></Navber>
            <div className="mt-10">
                <h2 className="text-3xl text-center font-bold">Please Register</h2>
                <form
                    onSubmit={handleClickRegister}
                    className="md:w-2/3 lg:w-1/2 mx-auto"
                >
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text"
                            >
                                Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name "
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span
                                className="label-text"
                            >
                                Photo
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required />
                    </div>
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
                            placeholder="Email"
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
                            placeholder="Password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p
                    className="text-center py-5">
                    Already have an account
                    <Link
                        className="text-blue-600 font-bold ml-1"
                        to="/login">
                        Please Login
                    </Link></p>
            </div>

        </div>
    );
};

export default Register;