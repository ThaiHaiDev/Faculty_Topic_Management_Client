import axiosClient from "../share/axios-client/axiosClient";

const statisticApi = {
    getStatistic(): Promise<any> {
        const url = "/api/v1/statistic";
        return axiosClient.get(url);
    },
};

export default statisticApi;