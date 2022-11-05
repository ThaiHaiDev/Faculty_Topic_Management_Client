import './Sidebar.scss';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import userSlice from '../../pages/SigninPage/userSlice';

const Sidebar = () => {
    const [roleSignin, setRoleSignin] = useState<string>('');
    const user = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();
    useEffect(() => {
        if (user.current.role === 'student') {
            setRoleSignin('sinh viên');
        } else if (user.current.role === 'dean') {
            setRoleSignin('trưởng khoa');
        } else if (user.current.role === 'lecturers') {
            setRoleSignin('giảng viên');
        }
    }, [user]);

    const handleSignout = () => {
        dispatch(userSlice.actions.logout());
    };
    
    return (
        <div className="sidebar">
            <h2>{`Danh mục ${roleSignin}`}</h2>
            {user.current.role === 'dean' && (
                <div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar">
                                Trang chủ
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/danhsachdetai" className="link-sidebar">
                                Danh sách đề tài
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/thongtingiangvien" className="link-sidebar">
                                Thông tin giảng viên
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/thongtinsinhvien" className="link-sidebar">
                                Thông tin sinh viên
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/themdulieu" className="link-sidebar">
                                Thêm mới dữ liệu
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar">
                                Thống kê
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar" onClick={handleSignout}>
                                Đăng xuất
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                </div>
            )}

            {user.current.role === 'student' && (
                <div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar">
                                Trang chủ
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/quanlitaikhoan" className="link-sidebar">
                                Quản lý tài khoản
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/quanlynhom" className="link-sidebar">
                                Quản lý nhóm
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar">
                                Hướng dẫn đăng ký
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/dangkidetai" className="link-sidebar">
                                Đăng ký đề tài
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/trangthaidetai" className="link-sidebar">
                                Trạng thái đề tài
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar" onClick={handleSignout}>
                                Đăng xuất
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                </div>
            )}

            {user.current.role === 'lecturers' && (
                <div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar">
                                Trang chủ
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/danhsachdetai" className="link-sidebar">
                                Danh sách đề tài
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar">
                                Thông tin sinh viên
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="card-side">
                        <div className="side-left">
                            <Link to="/" className="link-sidebar">
                                Thông tin nhóm đăng ký
                            </Link>
                        </div>
                        <div className="side-right">
                            <NavigateNextIcon />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
