import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

import rest1 from "../assets/recommendation/rest_01.jpg"
import rest2 from "../assets/recommendation/rest_02.jpg"
import rest3 from "../assets/recommendation/rest_03.jpg"
import rest4 from "../assets/recommendation/rest_04.jpg"
import rest5 from "../assets/recommendation/rest_05.jpg"

const Recommendation = () => {
    return (
        <div className='h-[110vh] px-5 flex gap-5'>
            {/* main div */}
            <div className='w-[45%] cursor-pointer box-border  overflow-hidden rounded-2xl relative'>
                {/* left div */}
                <img src={rest1} alt='logo' className='h-[90%] hover:scale-[1.1] transition-all w-full' />
                <div className='absolute flex flex-col gap-4 bottom-0 w-full bg-ghee rounded-b-2xl pl-7 py-5'>
                    <div className='text-5xl text-blackish font-bold'>Burger House</div>
                    <h1 className='flex items-center gap-3  text-gray'><FaCalendarAlt className='text-yellowish' />
                        Monday - Saturday</h1>
                    <h1 className='flex items-center gap-3  text-gray'><IoIosTime className='text-yellowish text-xl' />
                        09:00 - 18:00 </h1></div>
            <div className='absolute bottom-3 right-5  bg-yellowish px-1 py-1 rounded-full '><FaLongArrowAltRight className='text-3xl w-full hover:translate-x-5 transition-all' />
            </div>
            </div>
            <div className='w-1/2'>
                {/* right div */}
                <div className=''>
                    <img src={rest2} alt='logo' className='w-96'/>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Recommendation
