import ContentHome from '../../components/ContentHome/ContentHome';
import Sidebar from '../../components/Siderbar/Sidebar';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <ContentHome />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
