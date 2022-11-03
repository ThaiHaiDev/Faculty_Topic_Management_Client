import { Route, Routes } from "react-router-dom";
import DetailTopicPage from "../pages/DetailTopicPage/DetailTopicPage";
import HomePage from "../pages/HomePage/HomePage";
import SigninPage from "../pages/SigninPage/SigninPage";
import TopicPage from "../pages/TopicPage/TopicPage";

const Auth = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/danhsachdetai" element={<TopicPage />}/>
            <Route path="/chitiet" element={<DetailTopicPage />}/>
            <Route path="/signin" element={<SigninPage />}/>
        </Routes>
    );
};

export default Auth;