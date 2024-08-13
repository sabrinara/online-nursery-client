import MainLayout from "@/components/Layouts/MainLayouts";
import AllProducts from "@/pages/AllProducts/AllProducts";
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
        path: "/allcategory",
        element: <Home />,
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
