import './ListTopic.scss';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListTopic = () => {
    const handleChangePagi = (event: React.ChangeEvent<any>, page: number) => {
        console.log(page);
    };
    const test = 'Xây dựng website tạo đề thi và bài tập hỗ trợ dạy học trực tuyến - Bello Quiz';

    return (
        <div className="topic">
            <div className="header-topic">
                <p>Danh sách các đề tài</p>
            </div>
            <p className='total-topic'>Tổng số đề tài: 12</p>
            <table className="rtable">
                <thead>
                    <tr>
                        <th style={{paddingRight: '12px'}}>STT</th>
                        <th>Tên đề tài</th>
                        <th>GVHD</th>
                        <th>Phê duyệt</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="item-table">
                        <td style={{ textAlign: 'center', padding: '0' }}>1</td>
                        <td> {test && test.slice(0, 80) + (test.length > 80 ? '...' : '')}</td>
                        <td>Mai Anh Thơ</td>
                        <td>Chưa duyệt</td>
                        <td style={{ padding: '0', display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>
                            <img
                                src="https://img.icons8.com/ultraviolet/40/null/details-pane.png"
                                alt="icon-detail"
                                className="icon-detail"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>2</td>
                        <td>Xây dựng website tuyển dụng việc làm jobhere.tech</td>
                        <td>Mai Anh Thơ</td>
                        <td>2,046</td>
                        <td>00:59</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>3</td>
                        <td>1,089</td>
                        <td>2.63%</td>
                        <td>904</td>
                        <td>00:59</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>4</td>
                        <td>366</td>
                        <td>2.63%</td>
                        <td>333</td>
                        <td>01:01</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>5</td>
                        <td>162</td>
                        <td>1.17%</td>
                        <td>112</td>
                        <td>00:58</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>6</td>
                        <td>103</td>
                        <td>0.74%</td>
                        <td>87</td>
                        <td>01:22</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>7</td>
                        <td>98</td>
                        <td>0.71%</td>
                        <td>69</td>
                        <td>01:18</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>8</td>
                        <td>275</td>
                        <td>6.02%</td>
                        <td>90</td>
                        <td>N/A</td>
                    </tr>
                </tbody>
            </table>


            <div className="pagination">
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChangePagi} />
                </Stack>
            </div>
        </div>
    );
};

export default ListTopic;
