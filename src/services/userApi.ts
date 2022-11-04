import axiosClient from "../share/axios-client/axiosClient";

const userApi = {
    getAllUserWithLecturer(): Promise<any> {
        const url = "/api/v1/user/lecturers";
        return axiosClient.get(url);
    },
    getAllUserWithStudent(): Promise<any> {
        const url = "/api/v1/user/student";
        return axiosClient.get(url);
    },
    deleteAUser(idUser: string | undefined): Promise<any> {
        const url = `/api/v1/user/${idUser}`;
        return axiosClient.delete(url);
    },
};

export default userApi;