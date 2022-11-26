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
        <div className="add-user">
            <br />
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="create-topic-input"
                        type="text"
                        placeholder="Tên đề tài"
                        {...register('name', {
                            required: 'Tên đề tài được yêu cầu',
                        })}
                    />
                    {errors.name && <span className="message_error">{`${errors.name && errors.name?.message}`}</span>}

                    <textarea
                        className="create-topic-input"
                        placeholder="Mô tả đề tài"
                        {...register('desc', {
                            required: 'Mô tả đề tài được yêu cầu',
                        })}
                    />
                    {errors.desc && <span className="message_error">{`${errors.desc && errors.desc?.message}`}</span>}

                    <input
                        className="create-topic-input"
                        type="text"
                        placeholder="Mục tiêu"
                        {...register('target', {
                            required: 'Mục tiêu được yêu cầu',
                        })}
                    />
                    {errors.target && (
                        <span className="message_error">{`${errors.target && errors.target?.message}`}</span>
                    )}

                    <input
                        className="create-topic-input"
                        type="text"
                        placeholder="Vd Web, app,..."
                        {...register('product', {
                            required: 'Sản phẩm được yêu cầu',
                        })}
                    />
                    {errors.product && (
                        <span className="message_error">{`${errors.product && errors.product?.message}`}</span>
                    )}

                    <input
                        className="create-topic-input"
                        type="text"
                        placeholder="Công nghệ sử dụng"
                        {...register('technology', {
                            required: 'Công nghệ sử dụng được yêu cầu',
                        })}
                    />
                    {errors.technology && (
                        <span className="message_error">{`${errors.technology && errors.technology?.message}`}</span>
                    )}

                    <input
                        className="create-topic-input"
                        type="text"
                        placeholder="Học kì"
                        {...register('sesmeter', {
                            required: 'Học kì được yêu cầu',
                        })}
                    />
                    {errors.sesmeter && <span className="message_error">{`${errors.sesmeter?.message}`}</span>}

                    <input
                        className="create-topic-input"
                        type="number"
                        placeholder="Số lượng thành viên nhóm"
                        {...register('slsv', {
                            required: 'Số lượng thành viên nhóm được yêu cầu',
                        })}
                    />
                    {errors.slsv && <span className="message_error">{`${errors.slsv && errors.slsv?.message}`}</span>}

                    <select name="gv" className="select" onChange={changeGvHandler}>
                        <option value="">------</option>
                        {listDataGvhd?.map((gv: any) => (
                            <option value={gv._id} key={gv._id}>{`${gv?.lastName} ${gv?.firstName}`}</option>
                        ))}
                    </select>

                    <select name="spe" className="select" onChange={changeSpecializedHandler}>
                        <option value="">------</option>
                        {listDataSpecialized?.map((gv: any) => (
                            <option value={gv._id} key={gv._id}>
                                {gv.name}
                            </option>
                        ))}
                    </select>

                    <select name="typetopic" className="select" onChange={changeTypeTopicHandler}>
                        <option value="">------</option>
                        {listDataTypeTopic?.map((gv: any) => (
                            <option value={gv._id} key={gv._id}>
                                {gv.name}
                            </option>
                        ))}
                    </select>

                    <MultipleSelectPlaceholder listDataSv={listDataSv} setSvData={setSvData} />

                    <button type="submit">Đăng kí đề tài</button>
                </form>
            </div>
        </div>
    );
};

export default AddTopic;
