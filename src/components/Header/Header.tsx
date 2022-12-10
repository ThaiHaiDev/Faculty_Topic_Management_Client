import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import './Header.scss';

const Header = () => {
    const userSignin = useSelector((state: RootState) => state.user);

    return (
        <div className="header">
            <div className="baner"></div>
            {userSignin.current.role === undefined && <Link to='/signin' className='link-signin'>Đăng nhập</Link>} 
        </div>
    );
};

export default Header;
