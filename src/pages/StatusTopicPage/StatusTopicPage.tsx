import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Siderbar/Sidebar';
import StatusTopic from '../../components/StatusTopic/StatusTopic';
import './StatusTopicPage.scss';

const StatusTopicPage = () => {
    return (
        <div className="status-topic-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <div style={{ marginRight: '100px' }}>
                        <Breadcrumb name="Trạng thái đề tài" url="/trangthaidetai" />
                        <div className="manage-team-card">
                            <StatusTopic />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusTopicPage;
