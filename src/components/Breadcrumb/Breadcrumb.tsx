import { Link } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = (props: any) => {
    return (
        <div className="breadcrumb">
            <Link to={props.url} className='link-breadcrumb'>{props.name}</Link>
        </div> 
    )
}

export default Breadcrumb