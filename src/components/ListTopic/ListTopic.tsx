import './ListTopic.scss';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import topicApi from '../../services/topicApi';
import { useNavigate } from 'react-router-dom';
import formatName from '../../utils/formatName';

const ListTopic = () => {
    const [dataTopics, setDataTopics] = useState<any>([])

    const navigate = useNavigate();

    useEffect(() => {
        topicApi.getAllTopics().then((topics) => {
            setDataTopics(topics)
        })
    }, [])

    const handleChangePagi = (event: React.ChangeEvent<any>, page: number) => {
        console.log(page);
    };

    const handleToDetail = (idTopic: string) => {
        navigate(`/chitiet/${idTopic}`)
    }

    return (
        <div className="topic">
            <div className="header-topic">
                <p>Danh sách các đề tài</p>
            </div>
            <p className='total-topic'>Tổng số đề tài: {dataTopics.length}</p>
            <table className="rtable">
                <thead>
                    <tr>
                        <th style={{paddingRight: '12px'}}>STT</th>
                        <th>Tên đề tài</th>
                        <th>GVHD</th>
                        <th>Phê duyệt</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTopics?.map((topics:any, index:number) => (
                        <tr className="item-table" key={index}>
                        <td style={{ textAlign: 'center', padding: '0' }}>{index++}</td>
                        <td style={{width: '490px'}}> {topics.name && topics.name.slice(0, 80) + (topics.name.length > 80 ? '...' : '')} </td>
                        <td>{`${formatName(topics?.gvhd?.lastName)} ${formatName(topics?.gvhd?.firstName)}`}</td>
                        <td>{topics?.status === 'duyet2' ? 'Đã duyệt' : 'Chưa duyệt'}</td>
                        <td style={{ padding: '0', display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>
                            <img
                                src="https://img.icons8.com/ultraviolet/40/null/details-pane.png"
                                alt="icon-detail"
                                className="icon-detail"
                                onClick={() => handleToDetail(topics._id)}
                            />
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

export default ListTopic;
