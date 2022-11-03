import Breadcrumb from '../Breadcrumb/Breadcrumb';
import DetailTopic from '../DetailTopic/DetailTopic';
import './ContentDetailTopic.scss';

const ContentDetailTopic = () => {
    return (
        <div className='content-detail-topic'>
            <Breadcrumb name='Chi tiết đề tài' url='/chitiet' />
            <DetailTopic />
        </div>
    );
};

export default ContentDetailTopic;
