import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/Cartslice'
import {toast} from  'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';
const Productitme = ({post}) => {
    
      const cart = useSelector((state) => state.cart);
    // mujeab removefromcart and add to cart function create krne vo dispatch function ke through kr skte
    const dispatch=useDispatch()

    const addtocart=()=>{
        // yh cart ke andr item add krta hai
        dispatch(add(post))
        toast.success("items added to cart")
    }
    const removefromcart=()=>{
        // yh remove krta cart mai se item
        // post.id bhi paas kr rhe because remove toh id se bhi hojaegi
        dispatch(remove(post.id))
        toast.error("Items removed from Cart")
    }
   
  return (
    <>
    {/* card ban na start */}
        <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] gap-3 p-4  mt-10 ml-5 rounded-xl group   hover:shadow-[0px_-50px_100px_80px_rgba(0,0,0,0.08)]'>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>
                    {post.title}
                </p>
            </div>
            <div>
            <p className=' w-40 text-gray-400 font-normal text-[10px] text-left'>
                {post.description.split(" ").slice(0,10).join(" ") + "..."}
            </p>
            </div>
            <div className='h-[180px]'>
            {/* parent ke according h and w full */}
                <img src={post.image} className='h-full w-full'/>
            </div>
            {/* puri width lele card ki  */}
            <div className='flex justify-between gap-12 items-center w-full mt-5'>
                <p className='text-green-600 font-semibold '>₹{post.price}</p>
            
            {/* cart.includes((current)=>current.id===pod.id)  it means jo pass hui product ke andr vo cart mai exist krti hai agr exist krti toh remove krege nhi krti toh add krege 
            
            
            {/* important about add or remove hmko post.id hi krna pdaega nhi toh vo smj nhi paega konsa bol rha hu index khali nhi likh skte*/}
            
               {
                
                cart.some((current)=>current.id===post.id)? (
                    
                <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-2  uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
                onClick={removefromcart}>
                    Remove Item
                </button>):
                (<button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" 
                 onClick={addtocart}>
                    Add Item
                </button>)
               }
            
        </div>
        </div>
    </> 
  )
}

export default Productitme
