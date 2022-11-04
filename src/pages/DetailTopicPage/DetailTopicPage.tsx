import ContentDetailTopic from '../../components/ContentDetailTopic/ContentDetailTopic';
import Sidebar from '../../components/Siderbar/Sidebar';
import './DetailTopicPage.scss';

const DetailTopicPage = () => {

    return (
        <div className="detailtopic-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <ContentDetailTopic />
                </div>
            </div>
        </div>
    );
};

export default DetailTopicPage;
