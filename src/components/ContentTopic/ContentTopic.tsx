import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ListTopic from '../ListTopic/ListTopic';
import './ContentTopic.scss';

const ContentTopic = () => {
    return (
        <div className='content-topic'>
            <Breadcrumb name='Danh sách đề tài' url='/danhsachdetai' />
            <ListTopic />
        </div>
    );
};

export default ContentTopic;
