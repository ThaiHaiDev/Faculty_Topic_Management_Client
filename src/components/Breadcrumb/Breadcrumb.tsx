import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import formatName from '../../utils/formatName';
import './Breadcrumb.scss';

const Breadcrumb = (props: any) => {
    const userSignin = useSelector((state: RootState) => state.user);

    return (
        <div className="breadcrumb">
            <Link to={props.url} className='link-breadcrumb'>{props.name}</Link>
            <p className='info__user-signin'>{`Xin chào: ${formatName(userSignin?.current?.lastName)} ${formatName(userSignin?.current?.firstName)}`}</p>
        </div> 
    )
}

export default Breadcrumb