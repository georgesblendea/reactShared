import Menu from "./menu/Menu";
const StickyMenu = ({menuItems}) => {
    return(
        <div className="stickyMenu">
            <Menu menuItems={menuItems}></Menu>
        </div>
    );
}

export default StickyMenu;