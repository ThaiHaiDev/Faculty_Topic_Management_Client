import './ListSv.scss';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import userApi from '../../services/userApi';

import DeleteIcon from '@mui/icons-material/Delete';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

const ListSv = () => {
    const [dataSv, setDataSv] = useState<any>([]);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        userApi.getAllUserWithStudent().then((userData: any) => {
            setDataSv(userData);
        });
    }, []);

    const handleChangePagi = (event: React.ChangeEvent<any>, page: number) => {
        console.log(page);
    };

    const handleDelete = (idUser: string) => {
        userApi
            .deleteAUser(idUser)
            .then(() => {
                enqueueSnackbar('Xóa tài khoản thành công', { variant: 'success' });
                navigate('/');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="sv">
            <div className="header-topic">
                <p>Danh sách các giảng viên của khoa</p>
            </div>
            <p className="total-topic">Tổng số sinh viên: {dataSv.length}</p>
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
                    {dataSv?.map((sv: any, index: number) => (
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

            <div className="pagination">
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChangePagi} />
                </Stack>
            </div>
        </div>
    );
};

export default ListSv;
