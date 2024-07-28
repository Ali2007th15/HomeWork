import Catalog from "./components/Catalog/Catalog";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProductPage from "./components/ProductPage/ProductPage";
import Register from "./components/Register/Register";
import About from "./components/About/About"
import News from "./components/News/News"

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog/>,
  },
  {
    path: "/product/:title",
    element: <ProductPage/>,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/about",
    element: <About />,
  },

];



export default Routes;