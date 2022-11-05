import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topicApi from '../../services/topicApi';
import './StatusTopic.scss';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const StatusTopic = () => {
    const [dataDetail, setDatadetail] = useState<any>();
    const [statusShow, setStatusShow] = useState<string>('')

    const userSignin = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        topicApi.getATopicWithIdUser(userSignin.current._id).then((topic: any) => {
            setDatadetail(topic);
            if (topic.status === 'duyet0') {
                setStatusShow('Đề tài chưa được thông qua')
            } else if (topic.status === 'duyet1') {
                setStatusShow('Đề tài đã được duyệt lần 1')
            } else if (topic.status === 'duyet3') {
                setStatusShow('Đề tài đã được phê duyệt')
            }
        });
    }, [userSignin]);

    const handleDelete = () => {
        topicApi
            .deleteATopic(dataDetail._id)
            .then(() => {
                enqueueSnackbar('Xóa đề tài thành công', { variant: 'success' });
                navigate('/danhsachdetai');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar('Xóa đề tài thất bại', { variant: 'error' });
            });
    };

    return (
        <div className="statustopic">
            <div className="header-topic">
                <p>Chi tiết đề tài</p>
                <p style={{color: 'red', marginRight: '20px'}}>{statusShow}</p>
            </div>

            <Popup trigger={<p className="btn-delete">Delete</p>} position="bottom center">
                <div>
                    <p style={{ margin: '0', padding: '5px' }}>Bạn chắc chắn muốn xóa đề tài này?</p>
                    <DeleteIcon
                        className="icon-delete"
                        onClick={handleDelete}
                        sx={{ color: 'red', marginLeft: '85%', cursor: 'pointer' }}
                    />
                </div>
            </Popup>

            <table className="rtable" style={{ width: '100%' }}>
                <tbody style={{ width: '100%' }}>
                    <tr className="item-table">
                        <td style={{ width: '300px' }}>Tên đề tài</td>
                        <td style={{ width: '520px' }}>{dataDetail?.name}</td>
                    </tr>
                    <tr>
                        <td>Mục tiêu</td>
                        <td>{dataDetail?.target}</td>
                    </tr>
                    <tr>
                        <td>Yêu cầu</td>
                        <td>{dataDetail?.requirement}</td>
                    </tr>
                    <tr>
                        <td>Mô tả</td>
                        <td>{dataDetail?.desc}</td>
                    </tr>
                    <tr>
                        <td>Công nghệ</td>
                        <td>{dataDetail?.technology}</td>
                    </tr>
                    <tr>
                        <td>Chuyên ngành</td>
                        <td>{dataDetail?.idSpecialized.name}</td>
                    </tr>
                    <tr>
                        <td>Loại đề tài</td>
                        <td>{dataDetail?.typeTopic.name}</td>
                    </tr>
                    <tr>
                        <td>Học kì</td>
                        <td>{dataDetail?.sesmeter}</td>
                    </tr>
                    <tr style={{ background: '#b2dfdb' }}>
                        <td>Trưởng nhóm</td>
                        <td>{`${dataDetail?.leader?.lastName} ${dataDetail?.leader?.firstName}`}</td>
                    </tr>
                    <tr>
                        <td>Số lượng thành viên</td>
                        <td>{dataDetail?.team.length}</td>
                    </tr>
                    <tr>
                        <td>Các thành viên</td>
                        <td>{`${dataDetail?.team[0]?.lastName} ${dataDetail?.team[0]?.firstName} - ${dataDetail?.team[1]?.lastName} ${dataDetail?.team[1]?.firstName}`}</td>
                    </tr>
                    <tr style={{ background: '#e6ee9c' }}>
                        <td>Giáo viên hướng dẫn</td>
                        <td>{`${dataDetail?.gvhd?.lastName} ${dataDetail?.gvhd?.firstName}`}</td>
                    </tr>
                    <tr>
                        <td>Giáo viên phản biện</td>
                        <td>{`${dataDetail?.gvpb?.lastName} ${dataDetail?.gvpb?.firstName}`}</td>
                    </tr>
                    <tr>
                        <td>Điểm số</td>
                        <td>{dataDetail?.score}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StatusTopic;
