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
        setValue('gvhd', `${formatName(props.data?.gvhd?.lastName)} ${formatName(props.data?.gvhd?.firstName)}`);
        setValue(
            'team',
            `${formatName(props.data?.team[0]?.lastName)} ${formatName(props.data?.team[0]?.firstName)} - ${formatName(
                props.data?.team[1]?.lastName,
            )} ${formatName(props.data?.team[1]?.firstName)} - ${formatName(props.data?.team[2]?.lastName)} ${formatName(
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
                enqueueSnackbar('C???p nh???t ????? t??i th??nh c??ng', { variant: 'success' });
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
                <DialogTitle id="alert-dialog-title">{'C???p nh???t ????? t??i'}</DialogTitle>
                <form className="dialog__topic" onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
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
                                    <span className="message_error__6">{`${
                                        errors.target && errors.target?.message
                                    }`}</span>
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
                                    disabled
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
                                <p className="label-form__6">Tr?????ng nh??m</p>
                                <input className="create-topic-input__6" {...register('leader')} disabled />
                            </div>
                            <div className="col l-6">
                                <p className="label-form__6">Gi??o vi??n h?????ng d???n</p>
                                <input className="create-topic-input__6" {...register('gvhd')} disabled />
                            </div>
                            <div className="col l-6">
                                <p className="label-form__6">Ch???n chuy??n ng??nh</p>
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
                                <p className="label-form__6">Ch???n lo???i ????? t??i</p>
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
                                <p className="label-form">Th??nh vi??n trong nh??m</p>
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
