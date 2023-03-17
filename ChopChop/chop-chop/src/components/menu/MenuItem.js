
import '../../styles/MenuItem.css';
import { Link } from "react-router-dom";

const MenuItem = ({menuItem}) => {
    return(
        <div className='menuItem'>
            <Link to={menuItem.route}>{menuItem.name}</Link>
        </div>
    );
}

export default MenuItem;