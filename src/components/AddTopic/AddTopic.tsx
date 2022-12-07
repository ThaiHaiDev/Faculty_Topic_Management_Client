import './AddTopic.scss';

import { useSnackbar } from 'notistack';

import { useForm, SubmitHandler } from 'react-hook-form';
import { ChangeEvent, useEffect, useState } from 'react';
import userApi from '../../services/userApi';
import { AxiosError } from 'axios';
import typeTopicApi from '../../services/typeTopicApi';
import specializedApi from '../../services/specializedApi';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MultipleSelectPlaceholder from '../MultipleSelected/MultipleSelected';
import topicApi from '../../services/topicApi';

const AddTopic = () => {
    const [listDataGvhd, setListDataGvhd] = useState<any>([]);
    const [listDataSv, setListDataSv] = useState<any>([]);
    const [listDataSpecialized, setListDataSpecialized] = useState<any>([]);
    const [listDataTypeTopic, setListDataTypeTopic] = useState<any>([]);

    const userSignin = useSelector((state: RootState) => state.user);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();

    const [gvData, setGvData] = useState<string>('');
    const [svData, setSvData] = useState<any>([]);
    const [specializedData, setSpecializedData] = useState<string>('');
    const [typeTopicData, setTypeTopicData] = useState<string>('');

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        userApi.getAllUserWithLecturer().then((data) => {
            setListDataGvhd(data);
        });
        userApi.getAllUserWithStudent().then((data) => {
            const dataNoUserOnLogin = data.filter((d: any) => d._id !== userSignin.current._id);
            setListDataSv(dataNoUserOnLogin);
        });
        typeTopicApi.getAllTypeTopics().then((data) => {
            setListDataTypeTopic(data);
        });
        specializedApi.getAllSpecialized().then((data) => {
            setListDataSpecialized(data);
        });
    }, [userSignin]);

    const changeGvHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setGvData(event.currentTarget?.value);
    };

    const changeTypeTopicHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setTypeTopicData(event.currentTarget?.value);
    };

    const changeSpecializedHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSpecializedData(event.currentTarget?.value);
    };

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        const newTopic = {
            ...data,
            leader: userSignin.current._id,
            gvhd: gvData,
            team: [...svData, userSignin.current._id],
            idSpecialized: specializedData,
            typeTopic: typeTopicData,
        };
        topicApi
            .addTopic(newTopic)
            .then(() => {
                enqueueSnackbar('Đăng kí đề tài thành công', { variant: 'success' });
                reset();
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="add-topic">
            <br />
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col l-12">
                            <p className="label-form">Tên đề tài</p>
                            <input
                                className="create-topic-input"
                                type="text"
                                placeholder="Vd: Đề tài 1"
                                {...register('name', {
                                    required: 'Tên đề tài được yêu cầu',
                                })}
                            />
                            {errors.name && (
                                <span className="message_error">{`${errors.name && errors.name?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-12">
                            <p className="label-form">Mô tả đề tài</p>
                            <textarea
                                className="create-topic-textarea"
                                placeholder="Vd: abc ..."
                                {...register('desc', {
                                    required: 'Mô tả đề tài được yêu cầu',
                                })}
                            />
                            {errors.desc && (
                                <span className="message_error">{`${errors.desc && errors.desc?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Mục tiêu</p>
                            <input
                                className="create-topic-input__6"
                                type="text"
                                placeholder="Vd: Có thể sử dụng trong ..."
                                {...register('target', {
                                    required: 'Mục tiêu được yêu cầu',
                                })}
                            />
                            {errors.target && (
                                <span className="message_error__6">{`${errors.target && errors.target?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Sản phẩm thuộc</p>
                            <input
                                className="create-topic-input__6"
                                type="text"
                                placeholder="Vd Web, app,..."
                                {...register('product', {
                                    required: 'Sản phẩm được yêu cầu',
                                })}
                            />
                            {errors.product && (
                                <span className="message_error__6">{`${
                                    errors.product && errors.product?.message
                                }`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Công nghệ sử dụng</p>
                            <input
                                className="create-topic-input__6"
                                type="text"
                                placeholder="CVd: React, NodeJS, ..."
                                {...register('technology', {
                                    required: 'Công nghệ sử dụng được yêu cầu',
                                })}
                            />
                            {errors.technology && (
                                <span className="message_error__6">{`${
                                    errors.technology && errors.technology?.message
                                }`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Học kì</p>
                            <input
                                className="create-topic-input__6"
                                type="text"
                                placeholder="Vd: 1"
                                {...register('sesmeter', {
                                    required: 'Học kì được yêu cầu',
                                })}
                            />
                            {errors.sesmeter && (
                                <span className="message_error__6">{`${errors.sesmeter?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Số lượng thành viên của nhóm</p>
                            <input
                                className="create-topic-input__6"
                                type="number"
                                max={3}
                                min={1}
                                placeholder="Vd: 1"
                                {...register('slsv', {
                                    required: 'Số lượng thành viên nhóm được yêu cầu',
                                })}
                            />
                            {errors.slsv && (
                                <span className="message_error__6">{`${errors.slsv && errors.slsv?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Chọn giảng viên hướng dẫn</p>
                            <select name="gv" className="select" onChange={changeGvHandler}>
                                <option value="">------</option>
                                {listDataGvhd?.map((gv: any) => (
                                    <option value={gv._id} key={gv._id}>{`${gv?.lastName} ${gv?.firstName}`}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Chọn chuyên ngành</p>
                            <select name="spe" className="select" onChange={changeSpecializedHandler}>
                                <option value="">------</option>
                                {listDataSpecialized?.map((gv: any) => (
                                    <option value={gv._id} key={gv._id}>
                                        {gv.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Chọn loại đề tài</p>
                            <select name="typetopic" className="select" onChange={changeTypeTopicHandler}>
                                <option value="">------</option>
                                {listDataTypeTopic?.map((gv: any) => (
                                    <option value={gv._id} key={gv._id}>
                                        {gv.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col l-12">
                            <p className="label-form">Chọn thành viên nhóm</p>
                            <div style={{ display: 'flex', marginLeft: '3%' }}>
                                <MultipleSelectPlaceholder listDataSv={listDataSv} setSvData={setSvData} />
                                <button type="submit" className='btn-save__topic'>
                                    Đăng kí đề tài
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTopic;
