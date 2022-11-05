import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './components/Shop/Shop'
import Order from './components/Order/Order'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import About from './components/About/About'
import { productAndCartLoader } from './loader/productAndCartLoader';
function App() {
  const router = createBrowserRouter([
    {
      path : '/' , element : <Main></Main>, children : [
        {
          path : '/home', element : <Shop></Shop>
        },
        {
          path : '/' , element : <Shop></Shop>
        },
        {
          path : '/shop' , element : <Shop></Shop>
        },
        {
          path : '/order' , 
          loader : productAndCartLoader,
          element : <Order></Order>
        },
        {
          path : '/about', element : <About></About>
        },
        { 
          path : '/inventory' , element : <Inventory></Inventory>
        },
        {
          path: '/login', element : <Login></Login>
        }
      ]
    }

  ])
  return (
    <div>
    <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
