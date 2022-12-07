import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ListTvTeam from '../../components/ListTvTeam/ListTvTeam';
import Sidebar from '../../components/Siderbar/Sidebar';
import './ManageTeamPage.scss';

const ManageTeamPage = () => {
    return (
        <div className="manage-team-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <div style={{ marginRight: '100px' }}>
                        <Breadcrumb name="Quản lý nhóm" url="/quanlynhom" />
                        <div className="manage-team-card">
                            <ListTvTeam />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTeamPage;
