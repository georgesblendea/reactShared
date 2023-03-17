import Home from '../screens/Home';
import About from '../screens/About';
import Pricing from '../screens/Pricing';
import Contact from '../screens/Contact';
import Team from '../screens/Team';
import Blog from '../screens/Blog';

import { useParams } from "react-router-dom";

const menuItems=[
  { name:'Home', route:'home'},
  { name:'About', route:'about'},
  { name:'Pages', route:'', submenu: [
    { name: 'Pricing', route: 'pricing'},
    { name: 'Team', route: 'team'}
  ]},
  { name:'Blog', route:'blog'},
  { name:'Contact', route:'contact'},
];

const RouterHandler = () => {
  const {page:pageRoute} = useParams();

  


  
    const renderPage = () => {


      switch(pageRoute) {
        case 'home':
          return <Home></Home>
          case 'about':
            return <About></About>
          case 'pricing':
            return <Pricing></Pricing>
          case 'team':
            return <Team></Team>
          case 'blog':
            return <Blog></Blog>
          case 'contact':
            return <Contact></Contact>
          default: 
            return <Home></Home>
        }
      }

    return(renderPage());
}

export {RouterHandler, menuItems};