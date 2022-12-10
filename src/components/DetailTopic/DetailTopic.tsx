import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import topicApi from '../../services/topicApi';
import './DetailTopic.scss';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import formatName from '../../utils/formatName';
import DialogUpdateTopic from '../DialogUpdateTopic/DialogUpdateTopic';

const DetailTopic = () => {
    const params = useParams();
    const [dataDetail, setDatadetail] = useState<any>();

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        topicApi.getATopic(params.id).then((detail: any) => {
            setDatadetail(detail);
        });
    }, [params]);

    const handleDelete = () => {
        topicApi
            .deleteATopic(params.id)
            .then(() => {
                enqueueSnackbar('Xóa đề tài thành công', { variant: 'success' });
                navigate('/danhsachdetai');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data, { variant: 'error' });
            });
    };

    return (
        <div className="detailtopic">
            <div className="header-topic">
                <p>Chi tiết đề tài</p>
            </div>

            <div className="btn-topic">
                <DialogUpdateTopic data={dataDetail} />
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
            </div>

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
                        <td>{`${formatName(dataDetail?.leader?.lastName)} ${formatName(
                            dataDetail?.leader?.firstName,
                        )}`}</td>
                    </tr>
                    <tr>
                        <td>Số lượng thành viên</td>
                        <td>{dataDetail?.team.length}</td>
                    </tr>
                    <tr>
                        <td>Các thành viên</td>
                        <td>{`${formatName(dataDetail?.team[0]?.lastName)} ${formatName(
                            dataDetail?.team[0]?.firstName,
                        )} - ${formatName(dataDetail?.team[1]?.lastName)} ${formatName(
                            dataDetail?.team[1]?.firstName,
                        )} - ${formatName(dataDetail?.team[2]?.lastName)} ${formatName(
                            dataDetail?.team[2]?.firstName,
                        )}`}</td>
                    </tr>
                    <tr style={{ background: '#e6ee9c' }}>
                        <td>Giáo viên hướng dẫn</td>
                        <td>{`${formatName(dataDetail?.gvhd?.lastName)} ${formatName(
                            dataDetail?.gvhd?.firstName,
                        )}`}</td>
                    </tr>
                    <tr>
                        <td>Giáo viên phản biện</td>
                        <td>{`${formatName(dataDetail?.gvpb?.lastName)} ${formatName(
                            dataDetail?.gvpb?.firstName,
                        )}`}</td>
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

export default DetailTopic;
