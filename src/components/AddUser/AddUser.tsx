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
                    <input
                        className="signin__form-input"
                        type="email"
                        placeholder="Email"
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

                    <input
                        className="signin__form-input"
                        type="text"
                        placeholder="Họ tên lót"
                        {...register('lastName', {
                            required: 'Họ tên lót được yêu cầu',
                        })}
                    />
                    {errors.lastName && (
                        <span className="message_error">{`${errors.lastName && errors.lastName?.message}`}</span>
                    )}

                    <input
                        className="signin__form-input"
                        type="text"
                        placeholder="Tên chính"
                        {...register('firstName', {
                            required: 'Tên chính được yêu cầu',
                        })}
                    />
                    {errors.firstName && (
                        <span className="message_error">{`${errors.firstName && errors.firstName?.message}`}</span>
                    )}

                    <input
                        className="signin__form-input"
                        type="text"
                        placeholder="Mã số sinh viên"
                        {...register('mssv', {
                            required: 'Tên chính được yêu cầu',
                        })}
                    />
                    {errors.mssv && <span className="message_error">{`${errors.mssv && errors.mssv?.message}`}</span>}

                    <input
                        className="signin__form-input"
                        type="text"
                        placeholder="Số điện thoại"
                        {...register('phone', {
                            required: 'Số điện thoại được yêu cầu',
                        })}
                    />
                    {errors.phone && (
                        <span className="message_error">{`${errors.phone && errors.phone?.message}`}</span>
                    )}

                    <input
                        className="signin__form-input"
                        type="password"
                        placeholder="Enter password"
                        {...register('password', {
                            required: 'Mật khẩu được yêu cầu',
                            maxLength: {
                                value: 16,
                                message: 'Mật khẩu chỉ giới hạn 16 kí tự',
                            },
                        })}
                    />
                    {errors.password && <span className="message_error">{`${errors.password?.message}`}</span>}

                    <select name="role" className="select" onChange={changeRoleHandler}>
                        <option value="">------</option>
                        <option value="dean">Trưởng khoa</option>
                        <option value="lecturers">Giảng viên</option>
                        <option value="student">Sinh viên</option>
                    </select>

                    <button type="submit">Thêm mới</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
