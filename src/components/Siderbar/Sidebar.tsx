import './Sidebar.scss';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Danh mục</h2>
            <div className="card-side">
                <div className="side-left">
                    <Link to='/' className='link-sidebar'>Trang chủ</Link>
                </div>
                <div className="side-right">
                    <NavigateNextIcon />
                </div>
            </div>
            <div className="card-side">
                <div className="side-left">
                    <Link to='/danhsachdetai' className='link-sidebar'>Danh sách đề tài</Link>
                </div>
                <div className="side-right">
                    <NavigateNextIcon />
                </div>
            </div>
            <div className="card-side">
                <div className="side-left">
                    <Link to='/' className='link-sidebar'>Thông tin giảng viên</Link>
                </div>
                <div className="side-right">
                    <NavigateNextIcon />
                </div>
            </div>
            <div className="card-side">
                <div className="side-left">
                    <Link to='/' className='link-sidebar'>Hướng dẫn đăng kí</Link>
                </div>
                <div className="side-right">
                    <NavigateNextIcon />
                </div>
            </div>
            <div className="card-side">
                <div className="side-left">
                    <Link to='/' className='link-sidebar'>Thống kê</Link>
                </div>
                <div className="side-right">
                    <NavigateNextIcon />
                </div>
            </div>
            <div className="card-side">
                <div className="side-left">
                    <Link to='/' className='link-sidebar'>Tìm kiếm</Link>
                </div>
                <div className="side-right">
                    <NavigateNextIcon />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
