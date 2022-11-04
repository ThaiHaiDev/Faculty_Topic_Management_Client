import './Notification.scss';
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import notificationApi from '../../services/notificationApi';
import moment from 'moment';

const Notification = () => {
    const [dataNoti, setDataNoti] = useState<any>([]);

    useEffect(() => {
        notificationApi.getAllNoti().then((noti: any) => {
            setDataNoti(noti);
        });
    }, []);

    const handleChangePagi = (event: React.ChangeEvent<any>, page: number) => {
        console.log(page);
    };

    return (
        <div className="notification">
            <div className="header-noti">
                <p>Thông báo</p>
            </div>
            {dataNoti?.map((data:any) => (
                <div className="item-noti" key={data._id}>
                    <div className="card-noti">
                        <p className="time-noti">{moment(data.updatedAt).format("DD/MM/YYYY HH:MM")}</p>
                        <p className="name-noti">{data.header}</p>
                    </div>
                </div>
            ))}

            <div className="pagination">
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChangePagi} />
                </Stack>
            </div>
        </div>
    );
};

export default Notification;
