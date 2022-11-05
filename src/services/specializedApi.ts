import axiosClient from "../share/axios-client/axiosClient";

const specializedApi = {
    getAllSpecialized(): Promise<any> {
        const url = "/api/v1/specialized";
        return axiosClient.get(url);
    },

};

export default specializedApi;