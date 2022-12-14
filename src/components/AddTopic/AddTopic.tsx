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
                enqueueSnackbar('????ng k?? ????? t??i th??nh c??ng', { variant: 'success' });
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
                            <p className="label-form">T??n ????? t??i</p>
                            <input
                                className="create-topic-input"
                                type="text"
                                maxLength={255}
                                placeholder="Vd: ????? t??i 1"
                                {...register('name', {
                                    required: 'T??n ????? t??i ???????c y??u c???u',
                                })}
                            />
                            {errors.name && (
                                <span className="message_error">{`${errors.name && errors.name?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-12">
                            <p className="label-form">M?? t??? ????? t??i</p>
                            <textarea
                                className="create-topic-textarea"
                                placeholder="Vd: abc ..."
                                maxLength={500}
                                {...register('desc', {
                                    required: 'M?? t??? ????? t??i ???????c y??u c???u',
                                })}
                            />
                            {errors.desc && (
                                <span className="message_error">{`${errors.desc && errors.desc?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">M???c ti??u</p>
                            <input
                                className="create-topic-input__6"
                                type="text"
                                placeholder="Vd: C?? th??? s??? d???ng trong ..."
                                {...register('target', {
                                    required: 'M???c ti??u ???????c y??u c???u',
                                })}
                            />
                            {errors.target && (
                                <span className="message_error__6">{`${errors.target && errors.target?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">S???n ph???m thu???c</p>
                            <input
                                className="create-topic-input__6"
                                type="text"
                                placeholder="Vd Web, app,..."
                                {...register('product', {
                                    required: 'S???n ph???m ???????c y??u c???u',
                                })}
                            />
                            {errors.product && (
                                <span className="message_error__6">{`${
                                    errors.product && errors.product?.message
                                }`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">C??ng ngh??? s??? d???ng</p>
                            <input
                                className="create-topic-input__6"
                                type="text"
                                placeholder="CVd: React, NodeJS, ..."
                                {...register('technology', {
                                    required: 'C??ng ngh??? s??? d???ng ???????c y??u c???u',
                                })}
                            />
                            {errors.technology && (
                                <span className="message_error__6">{`${
                                    errors.technology && errors.technology?.message
                                }`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">H???c k??</p>
                            <input
                                className="create-topic-input__6"
                                type="text"
                                placeholder="Vd: 1"
                                {...register('sesmeter', {
                                    required: 'H???c k?? ???????c y??u c???u',
                                })}
                            />
                            {errors.sesmeter && (
                                <span className="message_error__6">{`${errors.sesmeter?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">S??? l?????ng th??nh vi??n c???a nh??m</p>
                            <input
                                className="create-topic-input__6"
                                type="number"
                                max={3}
                                min={1}
                                placeholder="Vd: 1"
                                {...register('slsv', {
                                    required: 'S??? l?????ng th??nh vi??n nh??m ???????c y??u c???u',
                                })}
                            />
                            {errors.slsv && (
                                <span className="message_error__6">{`${errors.slsv && errors.slsv?.message}`}</span>
                            )}
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Ch???n gi???ng vi??n h?????ng d???n</p>
                            <select name="gv" className="select" onChange={changeGvHandler}>
                                <option value="">------</option>
                                {listDataGvhd?.map((gv: any) => (
                                    <option value={gv._id} key={gv._id}>{`${gv?.lastName} ${gv?.firstName}`}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col l-6">
                            <p className="label-form__6">Ch???n chuy??n ng??nh</p>
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
                            <p className="label-form__6">Ch???n lo???i ????? t??i</p>
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
                            <p className="label-form">Ch???n th??nh vi??n nh??m</p>
                            <div style={{ display: 'flex', marginLeft: '3%' }}>
                                <MultipleSelectPlaceholder listDataSv={listDataSv} setSvData={setSvData} />
                                <button type="submit" className='btn-save__topic'>
                                    ????ng k?? ????? t??i
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
