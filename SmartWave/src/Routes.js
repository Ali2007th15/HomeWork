import Catalog from "./components/Catalog/Catalog";
import HomePage from "./components/HomePage/Home";
import Login from "./components/Login/Login";
import ProductPage from "./components/ProductPage/ProductPage";
import Register from "./components/Register/Register";


const Routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/catalog",
    element: <Catalog/>,
  },
  {
    path: "/product/:title",
    element: <ProductPage/>,
  },


];



export default Routes;