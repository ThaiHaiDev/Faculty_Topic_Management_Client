import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ListSv from '../../components/ListSv/ListSv';
import Sidebar from '../../components/Siderbar/Sidebar';
import './ListSvPage.scss';

const ListSvPage = () => {
    return (
        <div className="ListGvPage-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <Breadcrumb name="Danh sách sinh viên" url="/thongtinsinhvien" />
                    <ListSv />
                </div>
            </div>
        </div>
    );
};

export default ListSvPage;
