import React from 'react';
import profile from '../../Assets/img/profile.png';
import arrow from '../../Assets/svg/arrow-square-down.svg';
import wallet from '../../Assets/svg/empty-wallet.svg';
import logOut from '../../Assets/svg/logout.svg';
import message from '../../Assets/svg/notification-status.svg';
import menu from '../../Assets/img/menue.png';

const Header = () => {
    return (
        <div className="flex items-center justify-between">

            {/* Right Side: Balance and Profile */}
            <div className="flex items-center gap-6">

                {/* Profile Section - Hidden on md and smaller */}
                <div className="hidden md:flex items-center bg-[#E8E8E8] px-4 rounded-lg h-[45px] gap-[26px]">
                    <div className="flex items-center gap-[15px]">
                        <img src={profile} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-[#727272] text-[14px] font-bold">ابوالفضل عزیز خوش آمدی</span>
                    </div>
                    <img src={arrow} alt="Dropdown Arrow" className="w-5 h-5 ml-2" />
                </div>

                {/* Responsive Menu - Hidden on md and larger */}
                <div className="md:hidden flex items-center justify-center w-[50px] h-[50px] bg-[#262630] rounded-xl">
                    <img src={menu} alt='menu' className="w-[24px] h-[24px]" />
                </div>

                {/* Balance Section */}
                <div className="flex items-center bg-[#E8E8E8] px-4 rounded-lg h-[45px]">
                    <span className="text-[#727272] text-[14px] font-bold ml-2">21,265,000 تومان</span>
                    <img src={wallet} alt="Wallet" className="w-6 h-6" />
                </div>

            </div>

            {/* Left Side: Notifications and Return Button */}
            <div className="flex items-center gap-4">

                {/* Return to Website Button */}
                <button className="flex items-center bg-[#FF2B2B] text-white px-4 rounded-lg h-[45px]">
                    <span className="ml-2 text-[14px] font-bold md:block hidden">برگشت به وبسایت</span>
                    <img src={logOut} alt="Return Arrow" className="w-5 h-5" />
                </button>

                {/* Notification Icon with Badge */}
                <div className="relative flex items-center bg-[#E8E8E8] p-2 rounded-md h-[45px] w-[45px]">
                    <img src={message} alt="Notification" className="w-6 h-6 mx-auto" />
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        2
                    </span>
                </div>

            </div>

        </div>
    );
};

export default Header;
