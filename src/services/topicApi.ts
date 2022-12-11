import axiosClient from "../share/axios-client/axiosClient";
import { AddTopicRequest, AddTopicResponse } from "../share/models/topic";

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
    addTopic(dataTopic : AddTopicRequest): Promise<AddTopicResponse> {
        const url = '/api/v1/topic';
        return axiosClient.post(url, dataTopic);
    },
    deleteATopic(idTopic: string | undefined): Promise<any> {
        const url = `/api/v1/topic/${idTopic}`;
        return axiosClient.delete(url);
    },
    getAllTopicsNotApproval(idGv: string | undefined): Promise<any> {
        const url = `/api/v1/topic/notapproval/${idGv}`;
        return axiosClient.get(url);
    },
    getAllTopicsOfGvhd(idGv: string | undefined): Promise<any> {
        const url = `/api/v1/topic/alltopicofgvhd/${idGv}`;
        return axiosClient.get(url);
    },
    getAllTopicsApproval1st(): Promise<any> {
        const url = "/api/v1/topic/approval1st";
        return axiosClient.get(url);
    },
    getAllTopicsApproval2nd(): Promise<any> {
        const url = "/api/v1/topic/approved";
        return axiosClient.get(url);
    },
    approval1st(idTopic: string | undefined): Promise<any> {
        const url = `/api/v1/topic/${idTopic}/1st`;
        return axiosClient.patch(url);
    },
    approval2nd(idTopic: string | undefined): Promise<any> {
        const url = `/api/v1/topic/${idTopic}/2nd`;
        return axiosClient.patch(url);
    },
    updateTopic(dataTopic : any, idTopic : string | undefined): Promise<any> {
        const url = `/api/v1/topic/${idTopic}`;
        return axiosClient.put(url, dataTopic);
    },
};

export default topicApi;