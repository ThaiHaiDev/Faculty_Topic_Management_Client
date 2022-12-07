import axiosClient from "../share/axios-client/axiosClient";

const specializedApi = {
    getAllSpecialized(): Promise<any> {
        const url = "/api/v1/specialized";
        return axiosClient.get(url);
    },
    addSpecialized(data: any): Promise<any> {
        const url = "/api/v1/specialized";
        return axiosClient.post(url, data);
    },
};

export default specializedApi;