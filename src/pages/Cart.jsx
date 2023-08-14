import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cartitem from '../components/Cartitem';

const Cart = () => {
  // Access the 'cart' data from the Redux store
  const cart  = useSelector((state) => state.cart);
  
  const[amount,setamount]=useState(0)
//   reduce ,filter,map isme reduce use hoga because add up krna

    useEffect(()=>{
        // amount ki initial value 0 hai na amount paas kiya hm 0 bhi dal skte
        
        setamount(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0))
        // hr baar item store mai aye remove hoye tb yh render hoga
    },[cart])

  return (
    <>
      {/* bar vala div color ke liye */}
      <div>
        {/* just andr vala ANDR VALA display flex justify center ke liye */}
       
        {/* ab content ke liye  */}
          {cart?.length === 0 ? (
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <div className='flex flex-col justify-center items-center'>
              <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
              <NavLink to={'/'}>
                <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button>
              </NavLink>
            </div>
            </div>
          ) : (
              // yh bich mai krne ke liye hai ek div banya hai pattern ke hisab se 
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>
            {/* //left side ka div just upr vala */}
                <div className="w-[60%] md:w-[60%] p-2">
            {/* {left side ka code} */}
                    {cart.map((item,index)=>{
                         return(
                        <>
                        <Cartitem  
                        key={item.id}
                        item={item}
                        itemIndex={index}
                        cartLength={cart.length}

                        />
                        </>
                        )

                    })}
                </div>



                {/* right side */}
                      {/* justfy between se apart hogye dono */}
                <div className='flex flex-col my-14   justify-between'>
                {/* ab content ko smbhalege */}
                <div className='flex flex-col items-start gap-5  p-5 h-full '>
                        <div className='font-semibold text-xl text-green-700'>Your Cart</div>
                        <div className="font-semibold text-5xl text-green-700  ">Summary</div>
                        <p className="text-xl">
                            {/* jitni cart ki length hogi utna hi toh item pda hoga */}
                            <span  className="text-gray-700 font-semibold text-xl">Total items: {cart?.length}</span>
                        </p>
                    </div>
                    <div className="flex flex-col">
                <p className="text-xl font-bold">Total Amount :₹{amount}</p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
              </div>
            </div>
            </div>
          )}
        </div>
        
    </>
  );
};

export default Cart;

// yh bn gya ab chlo Cartitem ko bnane
