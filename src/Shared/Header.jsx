import logo from '../../public/assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <img className='mx-auto my-1.5' src={logo} alt="" />
            <p className=' text-center mt-5 text-lg font-medium'>Journalism Without Fear or Favour</p>
            <p className='mb-5 text-center text-base font-medium'>{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;