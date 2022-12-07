import './AddUser.scss';

import { useSnackbar } from 'notistack';

import { useForm, SubmitHandler } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import userApi from '../../services/userApi';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

const AddUser = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();

    const [roleData, setRoleData] = useState<string>('');

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();

    const changeRoleHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setRoleData(event.currentTarget?.value);
    };

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        const newUser = {
            ...data,
            role: roleData,
        };
        userApi
            .addUser(newUser)
            .then((dataNew: any) => {
                enqueueSnackbar('Tạo tài khoản thành công', { variant: 'success' });
                reset();
                navigate('/thongtinsinhvien');
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="add-user">
            <br />
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col l-6">
                            <p className="label-form">Email</p>
                            <input
                                className="adduser__form-input"
                                type="email"
                                placeholder="Vd: abc@gmail.com"
                                {...register('email', {
                                    required: 'Email được yêu cầu',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Đây không phải là một email hợp lệ',
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="message_error">{`${errors.email && errors.email?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form">Họ tên lót</p>
                            <input
                                className="adduser__form-input"
                                type="text"
                                placeholder="Vd: Nguyen Van"
                                {...register('lastName', {
                                    required: 'Họ tên lót được yêu cầu',
                                })}
                            />
                            {errors.lastName && (
                                <span className="message_error">{`${
                                    errors.lastName && errors.lastName?.message
                                }`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form">Tên chính</p>
                            <input
                                className="adduser__form-input"
                                type="text"
                                placeholder="Vd: Abc"
                                {...register('firstName', {
                                    required: 'Tên chính được yêu cầu',
                                })}
                            />
                            {errors.firstName && (
                                <span className="message_error">{`${
                                    errors.firstName && errors.firstName?.message
                                }`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form">Mã số sinh viên</p>
                            <input
                                className="adduser__form-input"
                                type="text"
                                placeholder="Vd: 19100000"
                                {...register('mssv', {
                                    required: 'Mã số sinh viên được yêu cầu',
                                })}
                            />
                            {errors.mssv && (
                                <span className="message_error">{`${errors.mssv && errors.mssv?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form">Số điện thoại</p>
                            <input
                                className="adduser__form-input"
                                type="text"
                                placeholder="Vd: 0987654321"
                                {...register('phone', {
                                    required: 'Số điện thoại được yêu cầu',
                                })}
                            />
                            {errors.phone && (
                                <span className="message_error">{`${errors.phone && errors.phone?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form">Mật khẩu</p>
                            <input
                                className="adduser__form-input"
                                type="password"
                                placeholder="Vd: 123"
                                {...register('password', {
                                    required: 'Mật khẩu được yêu cầu',
                                    maxLength: {
                                        value: 16,
                                        message: 'Mật khẩu chỉ giới hạn 16 kí tự',
                                    },
                                })}
                            />
                            {errors.password && <span className="message_error">{`${errors.password?.message}`}</span>}
                        </div>
                        <div className="col l-6"></div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <p className="label-form__select">Chọn quyền</p>
                        <select name="role" className="select" onChange={changeRoleHandler}>
                            <option value="student">------</option>
                            <option value="dean">Trưởng khoa</option>
                            <option value="lecturers">Giảng viên</option>
                            <option value="student">Sinh viên</option>
                        </select>
                    </div>

                    <button type="submit" className='btn-adduser'>Thêm mới</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
