import logo from '../../Assets/img/Logo Zarvantrip.png';

const SideBar = () => {
    return (
        <div className="bg-white h-full w-64 shadow-md flex flex-col p-4">
            {/* Header */}
            <div className="flex items-center justify-center py-4 border-b">
                <img src={logo} alt="Logo" className="w-12 h-12" />
                <span className="text-xl font-bold ml-2">ZARVANTRIP</span>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 mt-4">
                <ul>
                    <li className="flex items-center p-2 mb-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
                        <i className="fas fa-tachometer-alt mr-3"></i> داشبورد
                    </li>
                    <li className="flex items-center p-2 mb-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
                        <i className="fas fa-list mr-3"></i> لیست رزرو من
                    </li>
                    <li className="flex items-center p-2 mb-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
                        <i className="fas fa-wallet mr-3"></i> بخش مالی
                    </li>
                    <li className="flex items-center p-2 mb-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
                        <i className="fas fa-ticket-alt mr-3"></i> مدیریت تیکت‌ها
                    </li>
                    <li className="flex items-center p-2 mb-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
                        <i className="fas fa-users mr-3"></i> باشگاه مشتریان
                    </li>
                    <li className="flex items-center p-2 mb-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
                        <i className="fas fa-heart mr-3"></i> علاقه‌مندی‌های من
                    </li>
                    <li className="flex items-center p-2 mb-4 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md">
                        <i className="fas fa-users mr-3"></i> مسافران من
                    </li>
                </ul>
            </nav>

            {/* Footer */}
            <div className="flex items-center p-2 border-t mt-4">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="rounded-full w-10 h-10"
                />
                <div className="ml-3">
                    <p className="text-sm font-semibold">ابوالفضل عزیز</p>
                    <p className="text-xs text-gray-600">AbyariZarvan@gmail.com</p>
                </div>
                <button className="ml-auto text-red-600 hover:text-red-800">
                    خروج
                </button>
            </div>
        </div>
    );
};

export default SideBar;
