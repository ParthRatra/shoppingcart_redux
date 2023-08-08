import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/Cartslice'
import { toast } from 'react-hot-toast';



const Cartitem = ({itemIndex,cartLength, item}) => {
    // index se kuch nhi hoga vo smj nhi paega konsa bol rha hu
    const dispatch=useDispatch()
    const removefromcart=()=>{
        dispatch(remove(item.id))
        toast.error("Items removed from Cart")
    }

  return (
   <>
    {/* card format start baki chije hm piche kr ke aye hi hai*/}
    <div  className="flex flex-col md:flex-row p-2  mt-1 md:p-3 gap-5 items-center ">
        <img src={item.image} className="w-[20%] object-cover"></img>
        <div className='w-full md:w-[70%] space-y-3  self-start '>
            <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
            <h1 className='w-full text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
            <div className='flex w-full justify-between items-center'>  
                <p className="font-bold text-lg text-green-600">₹{item.price}</p>
                <div className='text-red-800 bg-red-200  hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-4 mr-3 group xs:mb-5 sm:mb-5 md:mb-5 ' onClick={removefromcart}>
                <AiFillDelete />
                </div>
            </div>
        </div>
    </div>

    {/* line vala concept hai yh */}
    {itemIndex !== cartLength - 1 && (
        <hr className="h-[.08rem]  bg-gray-200 border-0 dark:bg-slate-700" />
    )}
    {/* card format end */}
        
  


   </>
  )
}

export default Cartitem