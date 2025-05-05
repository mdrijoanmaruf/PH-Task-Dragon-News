import React from 'react'
import logo from '../../assets/logo.png'
import { format, compareAsc } from "date-fns";

const LogoBar = () => {
  return (
    <div className='flex justify-center items-center flex-col my-5 gap-1'>
        <img className='w-[350px]' src={logo} alt="" />
        <p className='text-dark3 font-[500] text-[15px]'>Journalism Without Fear or Favour</p>
        <p className='text-[16px] text-dark4 font-[600]'>
            {
                format(new Date(), "eeee, MMMM dd, yyyy")
            }
        </p>
    </div>
  )
}

export default LogoBar