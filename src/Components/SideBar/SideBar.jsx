import logo from '../../Assets/img/Logo Zarvantrip.png';
import dashboard from '../../Assets/img/dashboard.png';
import rezerv from '../../Assets/img/rezerv.png';
import money from '../../Assets/img/moneyy.png';
import ticket from '../../Assets/img/tikcet.png';
import customer from '../../Assets/img/customer.png';
import fave from '../../Assets/img/fave.png';
import mine from '../../Assets/img/mine.png';
import profile from '../../Assets/img/profile.png';

const SideBar = () => {
    return (
        <div className="bg-white h-full w-64 shadow-md flex flex-col p-4">
            {/* Header */}
            <div className="flex flex-col items-center justify-center py-4 border-b">
                <img src={logo} alt="Logo" className="w-[98px] h-[102px] mb-2" />
                <span className="text-[#343434] text-[20px] font-bold">ZARVANTRIP</span>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 mt-[30px] mb-[197px]">
                <ul className="flex flex-col gap-[20px]">
                    {/* Dashboard Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[#272727] text-[16px] font-bold cursor-pointer rounded-md hover:bg-[#262630] hover:text-white">
                        <img src={dashboard} alt="Dashboard Icon" className="w-[35px] h-[35px]" /> داشبورد
                    </li>
                    {/* Reservations List Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[#272727] text-[16px] font-bold cursor-pointer rounded-md hover:bg-[#262630] hover:text-white">
                        <img src={rezerv} alt="Reservations Icon" className="w-[35px] h-[35px]" /> لیست رزرو من
                    </li>
                    {/* Financial Section Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[16px] font-bold cursor-pointer rounded-md bg-[#262630] text-white">
                        <img src={money} alt="Money Icon" className="w-[35px] h-[35px]" /> بخش مالی
                    </li>
                    {/* Ticket Management Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[#272727] text-[16px] font-bold cursor-pointer rounded-md hover:bg-[#262630] hover:text-white">
                        <img src={ticket} alt="Tickets Icon" className="w-[35px] h-[35px]" /> مدیریت تیکت‌ها
                    </li>
                    {/* Customer Club Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[#272727] text-[16px] font-bold cursor-pointer rounded-md hover:bg-[#262630] hover:text-white">
                        <img src={customer} alt="Customer Club Icon" className="w-[35px] h-[35px]" /> باشگاه مشتریان
                    </li>
                    {/* Favorites Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[#272727] text-[16px] font-bold cursor-pointer rounded-md hover:bg-[#262630] hover:text-white">
                        <img src={fave} alt="Favorites Icon" className="w-[35px] h-[35px]" /> علاقه‌مندی‌های من
                    </li>
                    {/* My Passengers Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[#272727] text-[16px] font-bold cursor-pointer rounded-md hover:bg-[#262630] hover:text-white">
                        <img src={mine} alt="My Passengers Icon" className="w-[35px] h-[35px]" /> مسافران من
                    </li>
                </ul>
            </nav>

            {/* Footer */}
            <div className="flex flex-col items-center bg-[#D7D7D7] py-[13px] px-[32px] rounded-lg gap-[7px] mt-4">
                <img
                    src={profile}
                    alt="User"
                    className="rounded-full w-[35px] h-[35px]"
                />
                <p className="text-[#343434] text-[14px] font-bold">ابوالفضل عزیز</p>
                <p className="text-[#343434] text-[14px] font-bold">AbyariZarvan@gmail.com</p>
            </div>

            {/* Logout Button */}
            <button className="w-full bg-[#FF2B2B] text-white py-[12px] mt-2 rounded">
                خروج
            </button>
        </div>
    );
};

export default SideBar;
