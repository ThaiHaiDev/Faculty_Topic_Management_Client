import './ListTvTeam.scss';

import { useEffect, useState } from 'react';
import userApi from '../../services/userApi';

import 'reactjs-popup/dist/index.css';

import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ListTvTeam = () => {
    const [dataMember, setDataMember] = useState<any>([]);

    const userSignin = useSelector((state: RootState) => state.user);

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        userApi
            .getMemberInTeam(userSignin.current._id)
            .then((userData: any) => {
                setDataMember(userData);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    }, [userSignin, enqueueSnackbar]);

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
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default ListTvTeam;
