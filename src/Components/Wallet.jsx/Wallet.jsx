import React, { useRef, useState } from 'react';
import cardImage from '../../Assets/img/cardImage.png';
import check from '../../Assets/img/check.png';
import date from '../../Assets/img/date.png';
import copy from '../../Assets/img/copy.png';

const Wallet = () => {
    const inputRefs = useRef([]);
    const [inputValues, setInputValues] = useState(Array(24).fill(''));

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);

        if (value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <>
            <div className="flex items-center justify-center gap-7 p-4">
                {/* Card Image */}
                <img
                    src={cardImage}
                    alt="Card"
                    className="rounded-md shadow-lg w-[527px] h-[279px]"
                />

                {/* Button Section */}
                <div className="space-y-5">
                    {/* Selected Button */}
                    <button className="flex items-center justify-between w-[454px] h-[78px] bg-[#262630] text-white text-[16px] font-bold rounded-2xl px-4">
                        <span className="flex items-center gap-2">
                            <img src={check} alt="Check" className="w-[30px] h-[30px]" />
                            انتخاب شماره کارت حقیقی
                        </span>
                    </button>

                    {/* Unselected Buttons */}
                    <button className="flex items-center justify-between w-[454px] h-[78px] bg-[#F1F1F1] text-[#C4C4C4] text-[16px] font-bold rounded-2xl px-4">
                        <span className="flex items-center gap-2">
                            <div className="w-[30px] h-[30px] bg-[#D1D1D1] rounded-md"></div>
                            انتخاب شماره کارت حقوقی
                        </span>
                    </button>

                    <button className="flex items-center justify-between w-[454px] h-[78px] bg-[#F1F1F1] text-[#C4C4C4] text-[16px] font-bold rounded-2xl px-4">
                        <span className="flex items-center gap-2">
                            <div className="w-[30px] h-[30px] bg-[#D1D1D1] rounded-md"></div>
                            انتخاب شماره کارت دلخواه
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 p-4">
                {/* Inputs Section */}
                <div className="flex gap-8">
                    {/* Tracking Number Input */}
                    <input
                        type="text"
                        placeholder="* شماره پیگیری خود را وارد نمایید"
                        className="w-[313px] h-[60px] bg-[#F1F1F1] text-[#C4C4C4] text-[14px] font-bold rounded-md px-4 focus:outline-none focus:border-[1.5px] focus:border-[#FF2A2A]"
                    />

                    {/* Amount Input */}
                    <input
                        type="text"
                        placeholder="* مبلغ مد نظر خود را وارد نمایید"
                        className="w-[313px] h-[60px] bg-[#F1F1F1] text-[#C4C4C4] text-[14px] font-bold rounded-md px-4 focus:outline-none focus:border-[1.5px] focus:border-[#FF2A2A]"
                    />

                    {/* Date Input */}
                    <div className="relative flex items-center w-[313px] h-[60px] bg-[#F1F1F1] rounded-md">
                        <div className="absolute left-0 top-0 flex items-center justify-center w-[60px] h-[60px] bg-[#262630] rounded-md">
                            <img src={date} alt="Date Icon" className="w-[30px] h-[30px]" />
                        </div>
                        <input
                            type="text"
                            placeholder="* تاریخ واریز خود را انتخاب نمایید"
                            className="flex-1 pl-16 pr-4 h-full bg-transparent text-[#C4C4C4] text-[14px] font-bold focus:outline-none focus:border-[1.5px] focus:border-[#FF2A2A]"
                        />
                    </div>
                </div>

                {/* Bottom Input Section */}
                <div className="flex gap-3 items-center">
                    {/* Upload Comment Input */}
                    <div className="relative flex items-center w-[313px] h-[60px] bg-[#F1F1F1] rounded-md">
                        <div className="absolute left-0 top-0 flex items-center justify-center w-[60px] h-[60px] bg-[#262630] rounded-md">
                            <img src={copy} alt="Upload Icon" className="w-[30px] h-[30px]" />
                        </div>
                        <input
                            type="text"
                            placeholder="ارسال فایل مد نظر"
                            className="flex-1 pl-16 pr-4 h-full bg-transparent text-[#C4C4C4] text-[14px] font-bold focus:outline-none"
                        />
                    </div>

                    {/* Card Last 4 Digits Input */}
                    <div className="relative flex items-center w-[683px] h-[60px] bg-[#F1F1F1] rounded-md px-4">
                        <div className="flex-1 flex flex-row-reverse items-baseline gap-[24px] text-[#D9D9D9]">
                            <input
                                type="text"
                                maxLength="4"
                                placeholder="1628"
                                className="w-[50px] bg-transparent text-center text-[#000] font-bold outline-none"
                            />
                        </div>
                        <div className="flex-1 flex flex-row-reverse items-baseline gap-[24px] text-[#D9D9D9]">
                            {[...Array(3)].map((_, groupIndex) => (
                                <div key={groupIndex} className="flex gap-[5px]">
                                    {[...Array(4)].map((_, index) => (
                                        <span
                                            key={index}
                                            className="inline-block w-[14.01px] h-[3px] bg-[#D9D9D9]"
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                        <button className="absolute right-0 flex items-center justify-center w-[265px] h-[60px] bg-[#FF2A2A] text-white text-[14px] font-bold rounded-md">
                            4 رقم آخر شماره کارت وارد نمایید
                        </button>
                    </div>
                </div>

                <div className="p-4 flex flex-col items-center gap-4">
                    <div className="flex items-center justify-between w-[1010px] h-[60px] bg-[#F1F1F1] rounded-md p-2">
                        <div className="w-[313px] h-[60px] bg-[#565662] flex items-center justify-center rounded-md text-white text-[14px]">
                            24 رقم شماره شبا کارت بانکی خود را وارد نمایید
                        </div>

                        <div className="flex flex-1 gap-[30px] justify-center items-baseline">
                            {[...Array(6)].map((_, groupIndex) => (
                                <div key={groupIndex} className="flex gap-[5px]">
                                    {[...Array(4)].map((_, index) => (
                                        <input
                                            key={index}
                                            maxLength={1}
                                            ref={(el) => (inputRefs.current[groupIndex * 4 + index] = el)}
                                            onChange={(e) =>
                                                handleInputChange(e, groupIndex * 4 + index)
                                            }
                                            value={inputValues[groupIndex * 4 + index]}
                                            className={`w-[14px] h-[20px] bg-transparent text-center font-bold outline-none ${inputValues[groupIndex * 4 + index]
                                                ? 'border-none'
                                                : 'border-b-2 border-[#D9D9D9]'
                                                } focus:border-[#FF2A2A] text-black`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="w-[65px] h-[60px] bg-[#262630] flex items-center justify-center rounded-md text-white text-[14px]">
                            IR
                        </div>
                    </div>

                    {/* Updated Position of Submit Button */}
                    <div className="mt-2 w-[1020px] flex justify-start mr-3">
                        <button className="w-[130px] h-[60px] bg-[#1FBC42] text-white text-[12px] font-bold rounded-md">
                            ارسال اطلاعات
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wallet;
