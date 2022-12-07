import './AddSpecialized.scss';

import { useSnackbar } from 'notistack';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import specializedApi from '../../services/specializedApi';

const AddSpecialized = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        specializedApi
            .addSpecialized(data)
            .then((dataNew: any) => {
                enqueueSnackbar('Thêm chuyên ngành thành công', { variant: 'success' });
                reset();
                navigate('/');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="add-specialized">
            <br />
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col l-12">
                            <p className="label-form">Tên chuyên ngành</p>
                            <input
                                className="adduser__form-input"
                                type="text"
                                placeholder="Vd: Công nghệ phần mềm"
                                {...register('name', {
                                    required: 'Tiêu đề thông báo được yêu cầu',
                                })}
                            />
                            {errors.name && (
                                <span className="message_error">{`${errors.name && errors.name?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-12">
                            <p className="label-form">Mô tả</p>
                            <textarea
                                className="adduser__form-textarea"
                                placeholder="Vd: Chuyên ngành được chia ở năm 3 ..."
                                {...register('desc', {
                                    required: 'Nội dung thông báo được yêu cầu',
                                })}
                            />
                            {errors.desc && (
                                <span className="message_error">{`${errors.desc && errors.desc?.message}`}</span>
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

export default AddSpecialized;
