/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../pictures/logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cart=useSelector((state)=>state.cart)
  return (
    <>
        <div className='bg-slate-900 '>
        {/* bhar vale ne colour vala kiya  */}
            <div className=' flex  justify-between  items-center h-20 max-w-[1080px] mx-auto'>
                    <NavLink to='/'>
                        <img src={logo} className='h-14' />
                    </NavLink>
                    <div className='flex  item-center font-medium text-slate-100 mr-5 space-x-6'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/cart'>
                    {/* kisi bhi chij ko overlapp krana hota toh bhar vale ko relative andr vale ko absolute dete */}
                    <div className='relative'>
                    <FaShoppingCart className='text-2xl'/>
                    {/* nhi toh 0 bhi show hoga */}
                    {cart.length>0
                    && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>}
                      </div>
                    </NavLink> 

                    </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
