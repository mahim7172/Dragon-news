import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import qZone1 from '../../../public/assets/qZone1.png'
import qZone2 from '../../../public/assets/qZone2.png'
import qZone3 from '../../../public/assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='px-4 space-y-3 mb-5'>
                <h1 className='text-xl font-medium'>Login With</h1>
                <button className="btn btn-outline w-full">
                    <FcGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <BsGithub />
                    Github
                </button>
            </div>
            <div className='px-4  mb-5'>
                <h1 className='text-xl font-medium'>Find Us</h1>
                <Link className='border rounded-t-md text-lg p-4 flex items-center gap-2'>
                    <BsFacebook />
                    <span>  Facebook</span>
                </Link>
                <Link className='border-x  text-lg p-4 flex items-center gap-2'>
                    <BsTwitter />
                    <span>  Twitter</span>
                </Link>
                <Link className='border rounded-b-md text-lg p-4 flex items-center gap-2'>
                    <BsInstagram />
                    <span> Instagram </span>
                </Link>
            </div>
            {/* q zone */}
            <div className='px-4 space-y-3 mb-5'>
                <h1 className='text-xl font-medium'>Q Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;