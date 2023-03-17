import './App.css';
import Root from './routing/Root';
import RoutingError from './routing/RoutingError';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {RouterHandler, menuItems} from './components/RouterHandler';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Root menuItems={menuItems}/>,
    children: [
      {
        path: ':page',
        element: <RouterHandler/>,
      }
    ]
  }
]);




function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
