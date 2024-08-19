import MainLayout from "@/components/Layouts/MainLayouts";
import AllCategories from "@/pages/AllCategories/AllCategories";
import AddProducts from "@/pages/AllProducts/AddProducts";
import AllProducts from "@/pages/AllProducts/AllProducts";
import ProductDetail from "@/pages/AllProducts/ProductDetail";
import CartCheckout from "@/pages/CartPayment/CartCheckout";
import Payment from "@/pages/CartPayment/Payment";
import Home from "@/pages/Home/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "@/pages/TermsCondition/TermsCondition";
import NotFound from "@/pages/shared/NotFound";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/addproduct",
        element: <AddProducts />,
      },
      {
        path: "/allproducts/:id",
        element: <ProductDetail />,
      },
      {
        path: "/allcategories",
        element: <AllCategories />,
      },
      {
        path: "/cart",
        element: <CartCheckout  />,
      },
      {
        path: "/payments",
        element: <Payment />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      }, 
      {
        path:"/terms&condition",
        element:<TermsCondition/>,
      },
    ],
  },
]);

export default router;
