import './AddNoti.scss';

import { useSnackbar } from 'notistack';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import notificationApi from '../../services/notificationApi';

const AddNoti = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        notificationApi
            .addNoti(data)
            .then((dataNew: any) => {
                enqueueSnackbar('Thêm thông báo thành công', { variant: 'success' });
                reset();
                navigate('/');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="add-noti">
            <br />
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col l-12">
                            <p className="label-form">Tiêu đề thông báo</p>
                            <input
                                className="adduser__form-input"
                                type="text"
                                placeholder="Vd: Danh sách tham quan..."
                                {...register('header', {
                                    required: 'Tiêu đề thông báo được yêu cầu',
                                })}
                            />
                            {errors.header && (
                                <span className="message_error">{`${errors.header && errors.header?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-12">
                            <p className="label-form">Nội dung thông báo</p>
                            <textarea
                                className="adduser__form-textarea"
                                placeholder="Vd: Thời gian: 7.15g-12g ngày 28/09/2022. Tập trung..."
                                {...register('infomation', {
                                    required: 'Nội dung thông báo được yêu cầu',
                                })}
                            />
                            {errors.infomation && (
                                <span className="message_error">{`${
                                    errors.infomation && errors.infomation?.message
                                }`}</span>
                            )}
                        </div>
                    </div>

                    <button type="submit" className="btn-adduser">
                        Thêm mới
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNoti;
