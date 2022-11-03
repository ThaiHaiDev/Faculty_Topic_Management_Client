import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Notification from '../Notification/Notification';
import './ContentHome.scss';

const Content = () => {
    return (
        <div className='content-home'>
            <Breadcrumb name='Home' url='/' />
            <Notification />
        </div>
    );
};

export default Content;
