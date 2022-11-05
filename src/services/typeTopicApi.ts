import axiosClient from "../share/axios-client/axiosClient";

const typeTopicApi = {
    getAllTypeTopics(): Promise<any> {
        const url = "/api/v1/typetopic";
        return axiosClient.get(url);
    },
    // getATopic(idTopic: string | undefined): Promise<any> {
    //     const url = `/api/v1/topic/${idTopic}`;
    //     return axiosClient.get(url);
    // },

};

export default typeTopicApi;