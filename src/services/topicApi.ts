import axiosClient from "../share/axios-client/axiosClient";

const topicApi = {
    getAllTopics(): Promise<any> {
        const url = "/api/v1/topic";
        return axiosClient.get(url);
    },
    getATopic(idTopic: string | undefined): Promise<any> {
        const url = `/api/v1/topic/${idTopic}`;
        return axiosClient.get(url);
    },
    getATopicWithIdUser(idUser: string | undefined): Promise<any> {
        const url = `/api/v1/user/topic/${idUser}`;
        return axiosClient.get(url);
    },
    addTopic(dataTopic : any): Promise<any> {
        const url = '/api/v1/topic';
        return axiosClient.post(url, dataTopic);
    },
    deleteATopic(idTopic: string | undefined): Promise<any> {
        const url = `/api/v1/topic/${idTopic}`;
        return axiosClient.delete(url);
    },

};

export default topicApi;