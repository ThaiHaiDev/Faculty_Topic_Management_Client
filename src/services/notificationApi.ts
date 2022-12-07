import axiosClient from "../share/axios-client/axiosClient";

const notificationApi = {
    getAllNoti(): Promise<any> {
        const url = "/api/v1/noti";
        return axiosClient.get(url);
    },
    addNoti(data : any): Promise<any> {
        const url = "/api/v1/noti";
        return axiosClient.post(url, data);
    },
};

export default notificationApi;