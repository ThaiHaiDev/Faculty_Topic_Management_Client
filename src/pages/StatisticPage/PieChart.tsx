import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart(props : any) {
    const data = {
        labels: ['Đề tài đã duyệt lần 1', 'Đề tài đã được phê duyệt', 'Đề tài đang chờ phê duyệt'],
        datasets: [
            {
                label: 'Số lượng đề tài',
                data: [props?.dataStatistic.numberOfTopicApproval1st, props?.dataStatistic.numberOfTopicApproved,props?.dataStatistic.numberOfTopicApproving],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} />;
}
