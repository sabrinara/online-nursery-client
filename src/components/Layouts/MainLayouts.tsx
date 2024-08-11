// 
import Navbar from "@/pages/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="text-green-900">
      {/* text-[#11522c] */}
      <Navbar></Navbar>
      <Outlet ></Outlet>

    </div>
  );
};
export default MainLayout;
