import { Outlet } from "react-router-dom";

import Header from "../partials/Header";

const MainLayout = () => (
    <div className="flex row-responsive nowrap">
        <Header />
        <div className="page-content flex-1">
            <Outlet />
        </div>
    </div>
);

export default MainLayout;