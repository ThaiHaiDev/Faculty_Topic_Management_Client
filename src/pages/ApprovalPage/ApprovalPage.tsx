import ApprovalAdmin from '../../components/ApprovalAdmin/ApprovalAdmin';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Siderbar/Sidebar';
import './ApprovalPage.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ApprovalGv from '../../components/ApprovalGv/ApprovalGv';

const ApprovalPage = () => {
    const userSignin = useSelector((state: RootState) => state.user);
    return (
        <div className="approval-page">
            <div className="row">
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <div style={{ marginRight: '100px' }}>
                        <Breadcrumb name="Danh sách đề tài cần phê duyệt" url="/pheduyet" />
                        <div className="approval-card">
                            {userSignin.current.role === 'dean' ? <ApprovalAdmin /> : <ApprovalGv />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalPage;
