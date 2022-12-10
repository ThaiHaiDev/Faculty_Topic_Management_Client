import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="baner"></div>
            <Link to='/signin' className='link-signin'>Đăng nhập</Link>
        </div>
    );
};

export default Header;
