import './ListTvTeam.scss';

import { useEffect, useState } from 'react';
import userApi from '../../services/userApi';

import DeleteIcon from '@mui/icons-material/Delete';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ListTvTeam = () => {
    const [dataMember, setDataMember] = useState<any>([]);

    const userSignin = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        userApi
            .getMemberInTeam(userSignin.current._id)
            .then((userData: any) => {
                setDataMember(userData);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data, { variant: 'error' });
            });
    }, [userSignin, enqueueSnackbar]);

    const handleDelete = (idUser: string) => {
        userApi
            .deleteAUser(idUser)
            .then(() => {
                enqueueSnackbar('Xóa thành viên thành công', { variant: 'success' });
                navigate('/');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar('Xóa thành viên thất bại', { variant: 'error' });
            });
    };

    return (
        <div className="sv">
            <div className="header-topic">
                <p>Danh sách các thành viên trong nhóm</p>
            </div>
            <p className="total-topic">Tổng số thành viên hiện có: {dataMember?.length}</p>
            <table className="rtable">
                <thead>
                    <tr>
                        <th style={{ paddingRight: '12px' }}>STT</th>
                        <th>Tên giảng viên</th>
                        <th>Mssv</th>
                        <th>Số điện thoại</th>
                        <th>Email liên hệ</th>
                        <th>Đề tài</th>
                    </tr>
                </thead>
                <tbody>
                    {dataMember?.map((sv: any, index: number) => (
                        <tr className="item-table" key={index}>
                            <td style={{ textAlign: 'center', padding: '0' }}>{index++}</td>
                            <td>{`${sv.lastName} ${sv.firstName}`}</td>
                            <td>{sv.mssv}</td>
                            <td>{sv.phone}</td>
                            <td>{sv.email}</td>
                            <td>{sv.isTeam ? 'Đã đăng ký' : 'Chưa đăng ký'}</td>
                            <td style={{ padding: '0 10px' }}>
                                <Popup
                                    trigger={
                                        <DeleteIcon className="icon-delete" sx={{ color: 'red', cursor: 'pointer' }} />
                                    }
                                    position="bottom center"
                                >
                                    <div>
                                        <p style={{ margin: '0', padding: '5px' }}>
                                            Bạn chắc chắn muốn xóa tài khoản này không?
                                        </p>
                                        <p
                                            style={{
                                                background: '#ef5350',
                                                margin: '0',
                                                width: 'auto',
                                                paddingLeft: '15px',
                                                paddingTop: '5px',
                                                paddingBottom: '5px',
                                                marginLeft: '75%',
                                                cursor: 'pointer',
                                                color: 'white',
                                            }}
                                            onClick={() => handleDelete(sv._id)}
                                        >
                                            Yes
                                        </p>
                                    </div>
                                </Popup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default ListTvTeam;
