import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm, SubmitHandler } from 'react-hook-form';
import formatName from '../../utils/formatName';

import './DialogUpdateTopic.scss';
import typeTopicApi from '../../services/typeTopicApi';
import specializedApi from '../../services/specializedApi';
import { ChangeEvent } from 'react';
import topicApi from '../../services/topicApi';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

export default function DialogUpdateTopic(props: any) {
    const [open, setOpen] = React.useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const [listDataSpecialized, setListDataSpecialized] = React.useState<any>([]);
    const [listDataTypeTopic, setListDataTypeTopic] = React.useState<any>([]);

    const [specializedData, setSpecializedData] = React.useState<string>('');
    const [typeTopicData, setTypeTopicData] = React.useState<string>('');

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<any>();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        setValue('name', props.data?.name);
        setValue('desc', props.data?.desc);
        setValue('target', props.data?.target);
        setValue('product', props.data?.product);
        setValue('technology', props.data?.technology);
        setValue('sesmeter', props.data?.sesmeter);
        setValue('slsv', props.data?.slsv);
        setValue('leader', `${formatName(props.data?.leader?.lastName)} ${formatName(props.data?.leader?.firstName)}`);
        setValue('gvhd', `${formatName(props.data?.gvhd.lastName)} ${formatName(props.data?.gvhd.firstName)}`);
        setValue(
            'team',
            `${formatName(props.data?.team[0]?.lastName)} ${formatName(props.data?.team[0]?.firstName)} - ${formatName(
                props.data?.team[1]?.lastName,
            )} ${formatName(props.data?.team[1]?.firstName)} ${formatName(props.data?.team[2]?.lastName)} ${formatName(
                props.data?.team[2]?.firstName,
            )}`,
        );
    }, [setValue, props.data]);

    React.useEffect(() => {
        typeTopicApi.getAllTypeTopics().then((data) => {
            const datafilter = data.filter((d: any) => {
                return d._id !== props.data?.typeTopic._id;
            });
            setListDataTypeTopic(datafilter);
        });
        specializedApi.getAllSpecialized().then((data) => {
            const datafilter = data.filter((d: any) => {
                return d._id !== props.data?.idSpecialized._id;
            });
            setListDataSpecialized(datafilter);
        });
    }, [props.data]);

    const changeTypeTopicHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setTypeTopicData(event.currentTarget?.value);
    };

    const changeSpecializedHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSpecializedData(event.currentTarget?.value);
    };

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        var arrayTeam = [];
        for (var i = 0; i < props.data?.team.length; i++) {
            arrayTeam.push(props.data?.team[i]._id);
        }
        const newTopic = {
            ...data,
            leader: props.data?.leader._id,
            gvhd: props.data?.gvhd._id,
            team: [...arrayTeam],
            idSpecialized: specializedData !== '' ? specializedData : props.data?.idSpecialized._id,
            typeTopic: typeTopicData !== '' ? typeTopicData : props.data?.typeTopic._id,
        };
        topicApi
            .updateTopic(newTopic, props.data?._id)
            .then(() => {
                enqueueSnackbar('Cập nhật đề tài thành công', { variant: 'success' });
                setOpen(false);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data, { variant: 'error' });
            });
    };

    return (
        <div>
            <p className="btn-update__topic" onClick={handleClickOpen}>
                Update
            </p>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'Cập nhật đề tài'}</DialogTitle>
                <form className="dialog__topic" onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <div className="row">
                            <div className="col l-12">
                                <p className="label-form">Tên đề tài</p>
                                <input
                                    className="create-topic-input"
                                    type="text"
                                    maxLength={255}
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
                                    maxLength={500}
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
                                    <span className="message_error__6">{`${
                                        errors.target && errors.target?.message
                                    }`}</span>
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
                                    disabled
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
                                <p className="label-form__6">Trưởng nhóm</p>
                                <input className="create-topic-input__6" {...register('leader')} disabled />
                            </div>
                            <div className="col l-6">
                                <p className="label-form__6">Giáo viên hướng dẫn</p>
                                <input className="create-topic-input__6" {...register('gvhd')} disabled />
                            </div>
                            <div className="col l-6">
                                <p className="label-form__6">Chọn chuyên ngành</p>
                                <select name="spe" className="select" onChange={changeSpecializedHandler}>
                                    <option value={props.data?.idSpecialized._id}>
                                        {props.data?.idSpecialized.name}
                                    </option>
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
                                    <option value={props.data?.typeTopic._id}>{props.data?.typeTopic.name}</option>
                                    {listDataTypeTopic?.map((gv: any) => (
                                        <option value={gv._id} key={gv._id}>
                                            {gv.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col l-12">
                                <p className="label-form">Thành viên trong nhóm</p>
                                <input className="create-topic-input" {...register('team')} disabled />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Update</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
