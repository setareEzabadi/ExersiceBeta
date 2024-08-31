import React, { useState, useRef, useEffect } from 'react';
import logo from '../../Assets/img/Logo Zarvantrip.png';
import dashboard from '../../Assets/img/dashboard.png';
import rezerv from '../../Assets/img/rezerv.png';
import money from '../../Assets/img/moneyy.png';
import ticket from '../../Assets/img/tikcet.png';
import customer from '../../Assets/img/customer.png';
import fave from '../../Assets/img/fave.png';
import mine from '../../Assets/img/mine.png';
import profile from '../../Assets/img/profile.png';
import arowDown from '../../Assets/svg/arrow-square-downSideBar.svg';
import './SideBar.css';

const SideBar = () => {
    const [isFinancialOpen, setIsFinancialOpen] = useState(false);
    const [sectionHeight, setSectionHeight] = useState('0px');
    const sectionRef = useRef(null);

    const toggleFinancialSection = () => {
        setIsFinancialOpen(!isFinancialOpen);
    };

    useEffect(() => {
        if (sectionRef.current) {
            setSectionHeight(isFinancialOpen ? `${sectionRef.current.scrollHeight}px` : '0px');
        }
    }, [isFinancialOpen]);

    return (
        <div className="bg-white h-full w-64 shadow-md flex flex-col p-4">
            {/* Header */}
            <div className="flex flex-col items-center justify-center py-4 border-b">
                <img src={logo} alt="Logo" className="w-[98px] h-[102px] mb-2" />
                <span className="text-[#343434] text-[20px] font-bold">ZARVANTRIP</span>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 mt-[15px] mb-[15px]">
                <ul className="flex flex-col gap-[5px]">
                    {/* Dashboard Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[#272727] text-[16px] font-bold cursor-pointer rounded-md hover:bg-[#262630] hover:text-white">
                        <img src={dashboard} alt="Dashboard Icon" className="w-[35px] h-[35px]" /> داشبورد
                    </li>
                    {/* Reservations List Item */}
                    <li className="flex items-center gap-[7px] p-2 text-[#272727] text-[16px] font-bold cursor-pointer rounded-md hover:bg-[#262630] hover:text-white">
                        <img src={rezerv} alt="Reservations Icon" className="w-[35px] h-[35px]" /> لیست رزرو من
                    </li>
                    {/* Financial Section Item */}
                    <li
                        className={`flex items-center gap-[7px] p-2 text-[16px] font-bold cursor-pointer rounded-md ${isFinancialOpen ? 'bg-[#262630] text-white' : 'bg-[#262630] text-white'}`}
                        onClick={toggleFinancialSection}
                    >
                        <img src={money} alt="Money Icon" className="w-[35px] h-[35px]" /> بخش مالی
                        <div className="flex justify-end w-[80px]">
                            <img src={arowDown} alt="Arrow Down" className="w-[20px] h-[20px]" />
                        </div>
                    </li>
                    {/* Financial Submenu */}
                    <div
                        ref={sectionRef}
                        className="transition-height duration-500 ease-out overflow-hidden"
                        style={{ height: sectionHeight }}
                    >
                        <div className="bg-[#262630] w-full rounded-xl px-3 py-4 flex flex-col">
                            <a className="text-[#7E7E7E] text-sm !my-2" href="#"><li className="p-2">شارژ کیف پول</li></a>
                            <a className="text-[#7E7E7E] text-sm !my-2" href="#"><li className="p-2">کارت به کارت</li></a>
                            <a className="text-[#7E7E7E] text-sm !my-2" href="#"><li className="p-2">برداشت وجه</li></a>
                            <a className="text-[#7E7E7E] text-sm !my-2" href="#"><li className="p-2">فاکتورها</li></a>
                        </div>
                    </div>
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
