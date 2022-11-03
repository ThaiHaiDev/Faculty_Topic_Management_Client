import './Notification.scss';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Notification = () => {
    const handleChangePagi = (event: React.ChangeEvent<any>, page: number) =>{
        console.log(page)
    }
    
    return (
        <div className="notification">
            <div className="header-noti">
                <p>Thông báo</p>
            </div>
            <div className="item-noti">
                <div className="card-noti">
                    <p className="time-noti">03/11/2022 10:54:00</p>
                    <p className="name-noti">Thông báo đăng ký chuyên ngành khóa 2019</p>
                </div>
            </div>

            <div className="item-noti">
                <div className="card-noti">
                    <p className="time-noti">03/11/2022 10:54:00</p>
                    <p className="name-noti">Đăng ký môn Tiểu luận chuyên ngành khóa 2017</p>
                </div>
            </div>

            <div className="item-noti">
                <div className="card-noti">
                    <p className="time-noti">03/11/2022 10:54:00</p>
                    <p className="name-noti">Thông báo đăng ký chuyên ngành khóa 2019</p>
                </div>
            </div>

            <div className="item-noti">
                <div className="card-noti">
                    <p className="time-noti">03/11/2022 10:54:00</p>
                    <p className="name-noti">Thông báo đăng ký Khóa luận khóa 2020</p>
                </div>
            </div>

            <div className="item-noti">
                <div className="card-noti">
                    <p className="time-noti">03/11/2022 10:54:00</p>
                    <p className="name-noti">Thông báo đăng ký chuyên ngành khóa 2019</p>
                </div>
            </div>

            <div className="item-noti">
                <div className="card-noti">
                    <p className="time-noti">03/11/2022 10:54:00</p>
                    <p className="name-noti">Thông báo đăng ký chuyên ngành khóa 2019</p>
                </div>
            </div>

            <div className="item-noti">
                <div className="card-noti">
                    <p className="time-noti">03/11/2022 10:54:00</p>
                    <p className="name-noti">Thông báo đăng ký chuyên ngành khóa 2019</p>
                </div>
            </div>

            <div className="pagination">
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChangePagi}/>
                </Stack>
            </div>
        </div>
    );
};

export default Notification;
