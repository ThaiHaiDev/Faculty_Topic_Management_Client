import ContentTopic from '../../components/ContentTopic/ContentTopic';
import Sidebar from '../../components/Siderbar/Sidebar';
import './TopicPage.scss';

const TopicPage = () => {
    return (
        <div className="topic-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <ContentTopic />
                </div>
            </div>
        </div>
    );
};

export default TopicPage;
