import ApprovalAdmin from '../../components/ApprovalAdmin/ApprovalAdmin';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Siderbar/Sidebar';
import './ApprovalPage.scss';

const ApprovalPage = () => {
    return (
        <div className="approval-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <Breadcrumb name="Danh sách đề tài cần phê duyệt" url="/pheduyet" />
                    <div className="approval-card">
                        <ApprovalAdmin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalPage;
