import { Route, Routes } from 'react-router-dom';
import DetailTopicPage from '../pages/DetailTopicPage/DetailTopicPage';
import HomePage from '../pages/HomePage/HomePage';
import SigninPage from '../pages/SigninPage/SigninPage';
import TopicPage from '../pages/TopicPage/TopicPage';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ListGvPage from '../pages/ListGvPage/ListGvPage';
import ListSvPage from '../pages/ListSvPage/ListSvPage';
import AddDataPage from '../pages/AddDataPage/AddDataPage';
import AddTopicPage from '../pages/AddTopicPage/AddTopicPage';
import ManageTeamPage from '../pages/ManageTeamPage/ManageTeamPage';
import StatusTopicPage from '../pages/StatusTopicPage/StatusTopicPage';

const Auth = () => {
    const user = useSelector((state: RootState) => state.user);
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/danhsachdetai" element={<TopicPage />} />
            <Route path="/thongtingiangvien" element={<ListGvPage />} />
            <Route path="/thongtinsinhvien" element={<ListSvPage />} />
            <Route path="/themdulieu" element={<AddDataPage />} />
            <Route path="/chitiet/:id" element={<DetailTopicPage />} />

            <Route path="/quanlynhom" element={<ManageTeamPage />} />
            <Route path="/dangkidetai" element={<AddTopicPage />} />
            <Route path="/trangthaidetai" element={<StatusTopicPage />} />
            <Route path="/signin" element={<SigninPage />} />
        </Routes>
    );
};

export default Auth;
