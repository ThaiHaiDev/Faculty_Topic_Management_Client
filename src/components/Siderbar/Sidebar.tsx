import './Sidebar.scss';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import userSlice from '../../pages/SigninPage/userSlice';

import { DeanLink, StudentLink, LecturersLink } from '../../utils/LinkRouter';

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
                    {DeanLink?.map((deanlink: any, index: number) => (
                        <div className="card-side" key={index}>
                            <div className="side-left">
                                <Link to={deanlink.urlLink} className="link-sidebar">
                                    {deanlink.nameLink}
                                </Link>
                            </div>
                            <div className="side-right">
                                <NavigateNextIcon />
                            </div>
                        </div>
                    ))}
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
                    {StudentLink?.map((studentlink: any, index: number) => (
                        <div className="card-side" key={index}>
                            <div className="side-left">
                                <Link to={studentlink.urlLink} className="link-sidebar">
                                    {studentlink.nameLink}
                                </Link>
                            </div>
                            <div className="side-right">
                                <NavigateNextIcon />
                            </div>
                        </div>
                    ))}
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
                    {LecturersLink?.map((lecturerslink: any, index: number) => (
                        <div className="card-side" key={index}>
                            <div className="side-left">
                                <Link to={lecturerslink.urlLink} className="link-sidebar">
                                    {lecturerslink.nameLink}
                                </Link>
                            </div>
                            <div className="side-right">
                                <NavigateNextIcon />
                            </div>
                        </div>
                    ))}
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
        </div>
    );
};

export default Sidebar;
