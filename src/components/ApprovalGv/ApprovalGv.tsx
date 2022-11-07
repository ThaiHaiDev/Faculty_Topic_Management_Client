import './ApprovalGv.scss';

import { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import topicApi from '../../services/topicApi';

const ApprovalGv = () => {
    const [dataTopic, setDataTopic] = useState<any>([]);
    const [dataTopicOfGvhd, setDataTopicOfGvhd] = useState<any>([]);

    const userSignin = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        topicApi
            .getAllTopicsNotApproval(userSignin.current._id)
            .then((userData: any) => {
                setDataTopic(userData);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data, { variant: 'error' });
            });
        topicApi
            .getAllTopicsOfGvhd(userSignin.current._id)
            .then((userData: any) => {
                setDataTopicOfGvhd(userData);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data, { variant: 'error' });
            });
    }, [userSignin, enqueueSnackbar]);

    const handleToDetail = (idTopic: string) => {
        navigate(`/chitiet/${idTopic}`);
    };

    const handleToApproval = (idTopic: string) => {
        topicApi
            .approval1st(idTopic)
            .then((data) => {
                enqueueSnackbar(data, { variant: 'success' });
                navigate('/');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data, { variant: 'error' });
            });
    };

    return (
        <div className="approval-admin">
            <div className="header-topic">
                <p>Danh sách các đề tài cần được phê duyệt</p>
            </div>
            <p className="total-topic">Tổng số đề tài đang chờ phê duyệt: {dataTopic?.length}</p>
            <table className="rtable">
                <thead>
                    <tr>
                        <th style={{ paddingRight: '12px' }}>STT</th>
                        <th>Tên đề tài</th>
                        <th>Phê duyệt bởi</th>
                        <th>Chi tiết</th>
                        <th>Thông qua</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTopic?.map((topics: any, index: number) => (
                        <tr className="item-table" key={index}>
                            <td style={{ textAlign: 'center', padding: '0' }}>{index++}</td>
                            <td style={{ width: '400px' }}>
                                {' '}
                                {topics.name && topics.name.slice(0, 80) + (topics.name.length > 80 ? '...' : '')}{' '}
                            </td>
                            <td>{`${topics?.gvhd?.lastName} ${topics?.gvhd?.firstName}`}</td>
                            <td
                                style={{
                                    padding: '0',
                                    display: 'flex',
                                    justifyItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src="https://img.icons8.com/ultraviolet/40/null/details-pane.png"
                                    alt="icon-detail"
                                    className="icon-detail"
                                    onClick={() => handleToDetail(topics._id)}
                                />
                            </td>
                            <td style={{ padding: '8px 5px' }}>
                                <img
                                    src="https://img.icons8.com/ios-filled/25/null/submit-for-approval.png"
                                    alt="icon-approval"
                                    className="icon-approval"
                                    onClick={() => handleToApproval(topics._id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr style={{ marginTop: '30px' }} />
            <div className="header-topic">
                <p>Danh sách các đề tài sinh viên đang đăng ký</p>
            </div>
            <p className="total-topic">Tổng số đề tài: {dataTopic?.length}</p>
            <table className="rtable">
                <thead>
                    <tr>
                        <th style={{ paddingRight: '12px' }}>STT</th>
                        <th>Tên đề tài</th>
                        <th>Phê duyệt bởi</th>
                        <th>Chi tiết</th>
                        <th>Thông qua</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTopicOfGvhd?.map((topics: any, index: number) => (
                        <tr className="item-table" key={index}>
                            <td style={{ textAlign: 'center', padding: '0' }}>{index++}</td>
                            <td style={{ width: '400px' }}>
                                {' '}
                                {topics.name && topics.name.slice(0, 80) + (topics.name.length > 80 ? '...' : '')}{' '}
                            </td>
                            <td>{`${topics?.gvhd?.lastName} ${topics?.gvhd?.firstName}`}</td>
                            <td
                                style={{
                                    padding: '0',
                                    display: 'flex',
                                    justifyItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src="https://img.icons8.com/ultraviolet/40/null/details-pane.png"
                                    alt="icon-detail"
                                    className="icon-detail"
                                    onClick={() => handleToDetail(topics._id)}
                                />
                            </td>
                            <td style={{ padding: '8px 5px' }}>
                                <img
                                    src="https://img.icons8.com/ios-filled/25/null/submit-for-approval.png"
                                    alt="icon-approval"
                                    className="icon-approval"
                                    onClick={() => handleToApproval(topics._id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovalGv;
