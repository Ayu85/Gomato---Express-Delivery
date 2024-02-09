import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { toogleHamburger } from '../redux/slices/Hamburgerslice';
import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const [showHome, setShowhome] = useState(false)
    const [showAbout, setShowabout] = useState(false)
    const [showCatalog, setShowcatalog] = useState(false)
    const [showBlog, setShowblog] = useState(false)
    const showHamburger = useSelector(store => store.Hamburger.isShown)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <div className='bg-blackish py-6 px-5 flex justify-between items-center text-lg border-b border-dashed border-gray'>
            <div onClick={() => {
                navigate('/')
            }} className='cursor-pointer'>
                {/* logo box */}
                <img src={logo} alt='logo' />
            </div>
            <div className='hidden lg:block'>
                {/* menus box */}
                <ul className='flex list-none text-white gap-4 text-[1.05rem] relative'>
                    <li onMouseEnter={() => {
                        setShowhome(true)
                    }} onMouseLeave={() => {
                        setShowhome(false)
                    }} className='flex items-center justify-center cursor-pointer hover:text-yellowish py-1 '>Home{showHome ? <IoChevronDown className='text-sm ' /> :
                        <MdNavigateNext />}
                    </li>
                    {showHome && <div onMouseEnter={() => {
                        setShowhome(true)
                    }} onMouseLeave={() => {
                        setShowhome(false)
                    }} className={`${!showHome && "opacity-0 transition-all duration-500"} ${showHome && "opacity-100 transition-all duration-500"} absolute z-50 list-none flex flex-col  text-sm font-semibold top-9 cursor-pointer  -left-14 rounded-xl bg-white text-blackish px-5  py-4`}>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Food Delivery</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Water Delivery</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 ' onClick={() => {
                            navigate('/medicalsupplies')
                        }}>Medical Supplies</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Pizza Time</li>
                    </div>

                    }
                    <li onMouseEnter={() => {
                        setShowabout(true)
                    }} onMouseLeave={() => {
                        setShowabout(false)
                    }} className='flex items-center cursor-pointer hover:text-yellowish'>About us{showAbout ? <IoChevronDown className='text-sm ' /> :
                        <MdNavigateNext />}
                    </li>
                    {showAbout && <div onMouseEnter={() => {
                        setShowabout(true)
                    }} onMouseLeave={() => {
                        setShowabout(false)
                    }} className='absolute text-sm z-50 font-semibold  flex flex-col top-9  left-10 rounded-xl bg-white text-blackish px-5  py-4'>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Testimonials</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>FAQ's</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Gallery</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>404 Page</li>
                    </div>
                    }
                    <li onMouseEnter={() => {
                        setShowcatalog(true)
                    }} onMouseLeave={() => {
                        setShowcatalog(false)
                    }} className='flex items-center cursor-pointer hover:text-yellowish'>Catalog{showCatalog ? <IoChevronDown className='text-sm ' /> :
                        <MdNavigateNext />}
                    </li>
                    {showCatalog && <div onMouseEnter={() => {
                        setShowcatalog(true)
                    }} onMouseLeave={() => {
                        setShowcatalog(false)
                    }} className='absolute flex flex-col cursor-pointer  text-sm font-semibold   top-9 z-50 left-32 rounded-xl bg-white text-blackish px-5  py-4'>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 ' onClick={() => {
                            navigate('/asianfood')
                        }} >Shop</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Cart</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Checkout</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>My Account</li></div>
                    }
                    <li onMouseEnter={() => {
                        setShowblog(true)
                    }} onMouseLeave={() => {
                        setShowblog(false)
                    }} className='flex items-center cursor-pointer hover:text-yellowish'>Blog{showBlog ? <IoChevronDown className='text-sm ' /> :
                        <MdNavigateNext />}
                    </li>
                    {showBlog && <div onMouseEnter={() => {
                        setShowblog(true)
                    }} onMouseLeave={() => {
                        setShowblog(false)
                    }} className='absolute cursor-pointer flex flex-col  text-sm font-semibold top-9 z-50 left-52 rounded-xl bg-white text-blackish px-5  py-4'>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Blog With Us</li>
                        <li className='hover:bg-yellowish transition-all py-2 rounded-xl px-10 '>Read Blogs</li></div>
                    }
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Contacts<MdNavigateNext />
                    </li>
                </ul>
            </div>
            <div className=' items-center gap-9 text-white hidden lg:flex'>
                <div className='flex items-center gap-2 text-yellowish font-semibold'><PiPhoneCallFill className='text-white' />
                    +91-9005676379</div>
                <div className='cursor-pointer hover:scale-110 transition-all' onClick={() => {
                    navigate('/user')
                }}><FaUserAlt />
                </div>
                <div><IoCart />
                </div>
            </div>
            <div className='flex sm:flex md:flex lg:hidden'>
                {showHamburger ? <RxCross1 className='text-3xl text-white font-bold cursor-pointer' onClick={() => {
                    dispatch(toogleHamburger())
                }} /> : <RxHamburgerMenu className='text-white text-3xl cursor-pointer' onClick={() => {
                    dispatch(toogleHamburger())
                }} />}
            </div>

        </div>
    )
}

export default Header
