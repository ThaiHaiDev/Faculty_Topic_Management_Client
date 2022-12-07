import AddTopic from '../../components/AddTopic/AddTopic';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Siderbar/Sidebar';
import './AddTopicPage.scss';

const AddTopicPage = () => {
    return (
        <div className="add-topic-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <div style={{ marginRight: '100px' }}>
                        <Breadcrumb name="Đăng ký đề tài" url="/dangkidetai" />
                        <div className="create-topic-card">
                            <AddTopic />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTopicPage;
