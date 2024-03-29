import React, { useEffect, useState } from 'react'
import courier from "../assets/courier-person.png"
import { MdNavigateNext } from 'react-icons/md';
import logo from '../assets/logo.png'
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { toogleHamburger } from '../redux/slices/Hamburgerslice';
import { TbTruckDelivery } from "react-icons/tb";
import bglogo from '../assets/app-bg.png'
const Hero = () => {
    const showHamburger = useSelector(store => store.Hamburger.isShown)
    const dispatch = useDispatch()
    const [showbike, setShowbike] = useState(false);
    const [showHeading, setShowHeading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShowbike(true)
            setShowHeading(true)
        }, 400)
    }, [])
    return (
        <div className='bg-blackish  flex flex-wrap relative pt-20 sm:pt-20 md:pt-28 lg:pt-10 items-center justify-center gap-28 py-5 overflow-x-hidden '>
            <div className='w-96 z-40 flex items-center flex-col gap-3 sm:items-center lg:items-start md:items-center'>
                {/* left box */}
                <h1 className={`lg:text-7xl md:text-7xl text-4xl font-bold text-white ${!showHeading && '-translate-x-[900px]'}  ${showHeading && '-translate-x-0 transition-all duration-1000'}`}>Express </h1>
                <h1 className={`lg:text-7xl md:text-7xl text-4xl flex items-center gap-1   font-bold text-yellowish w-max ${!showHeading && '-translate-x-[900px]'}  ${showHeading && '-translate-x-0 transition-all duration-1000'}`}>Home Delivery<TbTruckDelivery className='text-7xl'/>
                </h1>
                <p className={`text-white md:text-center sm:text-center lg:text-start ${!showHeading && '-translate-x-[900px]'}  ${showHeading && '-translate-x-0 transition-all duration-1000'}`} >Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                <button className={`bg_slider2 px-5 sm:mt-10 lg:mt-2 mt-10 py-5 w-60 text-lg font-semibold text-blackish bg-yellowish rounded-full ${!showHeading && '-translate-x-[900px]'}  ${showHeading && '-translate-x-0 transition-all duration-1000'}`}>Read More</button>
            </div>
            <div className='lg:-mt-10 z-40 md:-mt-28 -mt-28 '>
                {/* right box */}
                <img src={courier} alt='logo' className={`md:w-[800px] mt-20 ${!showbike && "translate-x-[1000px] transition-all duration-1000"} ${showbike && "translate-x-[1px] transition-all duration-1000"}`} />
            </div>
            {/* this is absolute hamburger menu box */}
        
            {/* this is bg of hero section ...is absolute */}

        </div>
    )
}

export default Hero
