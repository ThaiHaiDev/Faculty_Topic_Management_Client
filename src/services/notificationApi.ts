import axiosClient from "../share/axios-client/axiosClient";

const notificationApi = {
    // getRoomCategory(data: any): Promise<AxiosResponse> {
    //     const url = `${API_BASE_URL}api/v1/auth/register`;
    //     return axiosClient.post(url, data);
    // },
    getAllNoti(): Promise<any> {
        const url = "/api/v1/noti";
        return axiosClient.get(url);
    },
};

export default notificationApi;