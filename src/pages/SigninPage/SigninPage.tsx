import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Siderbar/Sidebar';
import './SigninPage.scss';

import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useSnackbar } from 'notistack';

import { useForm, SubmitHandler } from 'react-hook-form';
import authApi from '../../services/authApi';
import { AxiosError } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from './userSlice';
import { SigninRequest } from '../../share/models/auth';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninRequest>();

    const userSignin = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    useEffect(() => {
        if (userSignin.current?.role === undefined) {
            navigate('/')
        }
    }, [navigate, userSignin])

    const onSubmit: SubmitHandler<SigninRequest> = async (data: SigninRequest) => {
        authApi
            .signIn(data)
            .then((userData: any) => {
                dispatch(userSlice.actions.signin(userData.data))
                enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
                reset();
                document.location = '/';
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="signin-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <Breadcrumb name="Đăng nhập" url="/signin" />
                    <div className="signin-card">
                        <h3>Thông báo</h3>
                        <div className="warning-signin">
                            <div className="header-warning">
                                <NewReleasesIcon className="icon-warning" />
                                <p>Cảnh báo !</p>
                            </div>
                            <p>Vui lòng đăng nhập vào hệ thống để trải nghiệm các chức năng</p>
                        </div>

                        <div className="signin-form">
                            <div className="form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h2>Đăng nhập</h2>
                                    <label>
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
                                            <span className="message_error">{`${
                                                errors.email && errors.email?.message
                                            }`}</span>
                                        )}
                                    </label>

                                    <label>
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
                                        {errors.password && (
                                            <span className="message_error">{`${errors.password?.message}`}</span>
                                        )}
                                    </label>
                                    <button type="submit">Đăng nhập</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
