import { Outlet } from "react-router-dom";
import StickyMenu from "../components/StickyMenu";


const Root = ({menuItems}) => {
    return(
        <>
            <StickyMenu menuItems={menuItems}>Should be Sitcky</StickyMenu>
            <Outlet/>
        </>
    );
}

export default Root;