import './DetailTopic.scss';

const DetailTopic = () => {

    return (
        <div className="detailtopic">
            <div className="header-topic">
                <p>Chi tiết đề tài</p>
            </div>
            <table className="rtable" style={{width: '100%'}}>
                <tbody style={{width: '100%'}}>
                    <tr className="item-table">
                        <td style={{width: '300px'}}>Tên đề tài</td>
                        <td style={{width: '520px'}}>Xây dựng website quản lý đề tài khoa</td>
                       
                    </tr>
                    <tr>
                        <td>Mục tiêu</td>
                        <td>Học tập được công nghệ MERN Stack, Typescript, CI/CD, deploy</td>
                    </tr>
                    <tr>
                        <td>Yêu cầu</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mô tả</td>
                        <td>Trang web sử dụng ReactJS và Nodejs và được viết bằng Typescript</td>
                    </tr>
                    <tr>
                        <td>Công nghệ</td>
                        <td>Trang web sử dụng ReactJS và Nodejs và được viết bằng Typescript</td>
                    </tr>
                    <tr>
                        <td>Yêu cầu</td>
                        <td>Trang web sử dụng ReactJS và Nodejs và được viết bằng Typescript</td>
                    </tr>
                    <tr>
                        <td>Chuyên ngành</td>
                        <td>Công nghệ phần mềm</td>
                    </tr>
                    <tr>
                        <td>Loại đề tài</td>
                        <td>Tiểu luận chuyên ngành</td>
                    </tr>
                    <tr>
                        <td>Học kì</td>
                        <td>Học kì I</td>
                    </tr>
                    <tr style={{background: '#b2dfdb'}}>
                        <td>Trưởng nhóm</td>
                        <td>Nguyễn Thái Hải</td>
                    </tr>
                    <tr>
                        <td>Số lượng thành viên</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Các thành viên</td>
                        <td>Hoàng Minh Thắng - Nguyễn Hữu Hiếu</td>
                    </tr>
                    <tr style={{background: '#e6ee9c'}}>
                        <td>Giáo viên hướng dẫn</td>
                        <td>Huỳnh Xuân Phụng</td>
                    </tr>
                    <tr>
                        <td>Giáo viên phản biện</td>
                        <td>Mai Anh Thơ</td>
                    </tr>
                    <tr>
                        <td>Điểm số</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default DetailTopic;
