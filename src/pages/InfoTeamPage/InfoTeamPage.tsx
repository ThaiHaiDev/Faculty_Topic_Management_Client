import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import InfoTeam from '../../components/InfoTeam/InfoTeam';
import Sidebar from '../../components/Siderbar/Sidebar';
import './InfoTeamPage.scss';

const InfoTeamPage = () => {
    return (
        <div className="info-team-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <div style={{ marginRight: '100px' }}>
                        <Breadcrumb name="Thông tin các nhóm đăng ký" url="/thongtinnhom" />
                        <div className="info-team-card">
                            <InfoTeam />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoTeamPage;
