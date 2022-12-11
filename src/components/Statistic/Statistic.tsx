import './Statistic.scss';

import { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import { PieChart } from '../../pages/StatisticPage/PieChart';
import statisticApi from '../../services/statisticAPI';
import { PieChartTopic } from '../../pages/StatisticPage/PieChartTopic';

const Statistic = () => {
    const [dataStatistic, setDataStatistic] = useState<any>([]);

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        statisticApi
            .getStatistic()
            .then((data: any) => {
                setDataStatistic(data);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    }, [enqueueSnackbar]);

    return (
        <div className="statistic">
            <div className="header-topic">
                <p>Danh sách các thành viên trong nhóm</p>
            </div>
            <div className="row">
                <div className="col l-6">
                    <div className="card">
                        <h3>{`Tổng số sinh viên: ${dataStatistic?.numberOfStudents}`}</h3>
                    </div>
                    <div style={{ padding: '15px' }}>
                        <PieChartTopic dataStatistic={dataStatistic} />
                    </div>
                </div>

                <div className="col l-6">
                    <div className="card">
                        <h3>{`Tổng số đề tài: ${dataStatistic?.numberOfTopic}`}</h3>
                    </div>
                    <div style={{ padding: '15px' }}>
                        <PieChart dataStatistic={dataStatistic} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
