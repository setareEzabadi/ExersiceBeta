import { Outlet } from "react-router";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";

const MainPage = () => {
    return (
        <div className="flex min-h-screen">
            {/* SideBar Section */}
            <div className="w-64">
                <SideBar />
            </div>

            {/* Main Content Section */}
            <div className="flex-1 bg-gray-100 p-6">
                {/* Header Section */}
                <Header />

                {/* Main Outlet Content */}
                <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
