import '../../styles/Menu.css'
import MenuItem from "./MenuItem";


const Menu = ({menuItems}) => {

    const renderItems = () => {
        const items = menuItems.map(item => <MenuItem key={item.route} menuItem={item}/>);
        return (
            <div className='menu'>
                {items}
            </div>
        );
    }

    return(renderItems());
}

export default Menu;