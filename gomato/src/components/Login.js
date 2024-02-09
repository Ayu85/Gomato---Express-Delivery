import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";

const Login = () => {
    return (
        <div className='flex flex-col gap-6 rounded-xl mt-36 py-20 w-[500px]  ml-[50%] -translate-x-[50%] items-center mb-20 bg-blackish text-white justify-center'>
            <h1 className='text-4xl font-semibold '>LOG IN</h1>
            <div className='flex items-center gap-3'>
                {/* logos page */}
                <div className=' bg-ghee mb-3 px-3 py-3 cursor-pointer rounded-full flex justify-center items-center gap-3'>
                    < FcGoogle className='text-3xl' />
                </div>
                <div className=' bg-ghee mb-3 px-3 py-3 cursor-pointer rounded-full flex justify-center items-center gap-3'>
                    <FcPhone className='text-3xl' />
                </div></div>
            <form className='flex flex-col gap-5'>
                <input type='email' placeholder='Enter Email' className='w-96 py-3 rounded-xl pl-3 text-gray outline-none' />
                <input type='password' placeholder='Enter Password' className='w-96 py-3 rounded-xl pl-3 text-gray outline-none' />
                <button className='w-96 bg_slider2 font-semibold text-lg py-3 rounded-xl pl-3 text-blackish bg-yellowish outline-none'>Log In</button>
            </form>
        </div>
    )
}

export default Login
