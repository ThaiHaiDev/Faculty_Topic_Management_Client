import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Siderbar/Sidebar';
import Statistic from '../../components/Statistic/Statistic';
import './StatisticPage.scss';

const StatisticPage = () => {
    return (
        <div className="statistic-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <div style={{ marginRight: '100px' }}>
                        <Breadcrumb name="Thống kê" url="/thongke" />
                        <div className="info-team-card">
                            <Statistic />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticPage;
