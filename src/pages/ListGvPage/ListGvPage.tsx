import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ListGv from '../../components/ListGv/ListGv';
import Sidebar from '../../components/Siderbar/Sidebar';
import './ListGvPage.scss';

const ListGvPage = () => {
    return (
        <div className="ListGvPage-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <Breadcrumb name='Danh sách giảng viên' url='/thongtingiangvien' />
                    <ListGv />
                </div>
            </div>
        </div>
    );
};

export default ListGvPage;
