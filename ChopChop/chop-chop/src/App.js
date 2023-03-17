import './App.css';
import Root from './routing/Root';
import Home from './screens/Home';
import RoutingError from './routing/RoutingError';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Children } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    loader: async () => {},
    errorElement: <RoutingError/>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
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
