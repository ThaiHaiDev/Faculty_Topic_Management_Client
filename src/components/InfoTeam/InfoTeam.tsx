import './InfoTeam.scss';

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

const colorTeam = ['#e1bee7', '#f8bbd0', '#90caf9', '#80cbc4', '#e6ee9c', '#ffcc80', '#e1bee7', '#f8bbd0'];

const InfoTeam = () => {
    const [dataTeam, setDataTeam] = useState<any>([]);

    const userSignin = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        userApi
            .getAllTeamWithIdGvhd(userSignin.current._id)
            .then((userData: any) => {
                setDataTeam(userData);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
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
            <p className="total-topic">Tổng số nhóm đã đăng ký của bạn: {dataTeam?.length}</p>
            <table className="rtable">
                <thead>
                    <tr>
                        <th style={{ paddingRight: '12px' }}>Nhóm</th>
                        <th>Tên giảng viên</th>
                        <th>Mssv</th>
                        <th>Số điện thoại</th>
                        <th>Email liên hệ</th>
                        <th>Chức vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTeam?.map((sv: any, index: number) => (
                        <>
                            <tr className="item-table" key={index} style={{ background: colorTeam[index] }}>
                                <td style={{ textAlign: 'center', padding: '0' }}>{index}</td>
                                <td>{`${sv.leader.lastName} ${sv.leader.firstName}`}</td>
                                <td>{sv.leader.mssv}</td>
                                <td>{sv.leader.phone}</td>
                                <td>{sv.leader.email}</td>
                                <td>Trưởng nhóm</td>
                                <td style={{ padding: '0 10px' }}>
                                    <Popup
                                        trigger={
                                            <DeleteIcon
                                                className="icon-delete"
                                                sx={{ color: 'red', cursor: 'pointer' }}
                                            />
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
                                                onClick={() => handleDelete(sv.leader._id)}
                                            >
                                                Yes
                                            </p>
                                        </div>
                                    </Popup>
                                </td>
                            </tr>
                            {sv.teams?.map((tv: any, i: number) => (
                                <tr className="item-table" key={i} style={{ background: colorTeam[index] }}>
                                    <td style={{ textAlign: 'center', padding: '0' }}>{index}</td>
                                    <td>{`${tv.lastName} ${tv.firstName}`}</td>
                                    <td>{tv.mssv}</td>
                                    <td>{tv.phone}</td>
                                    <td>{tv.email}</td>
                                    <td>Thành viên</td>
                                    <td style={{ padding: '0 10px' }}>
                                        <Popup
                                            trigger={
                                                <DeleteIcon
                                                    className="icon-delete"
                                                    sx={{ color: 'red', cursor: 'pointer' }}
                                                />
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
                                                    onClick={() => handleDelete(tv._id)}
                                                >
                                                    Yes
                                                </p>
                                            </div>
                                        </Popup>
                                    </td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InfoTeam;
