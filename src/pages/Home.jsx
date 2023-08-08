import React, { useEffect, useState } from 'react';
import Productitme from '../components/Productitme';
import Spinner from '../components/Spinner';
const API_KEY = "https://fakestoreapi.com/products";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_KEY);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // Run the API call only once when the component mounts
  }, []);

  return (
    <>
      <div>
        
          {loading ? (
            <Spinner /> // Replace this with your Spinner component
           //xs means extra `small
          ) : (<div className='grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1080px] p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                {
            products.map((item, index) => {
                    return(
                        <><Productitme index={index} post={item} />
                        </> 
                    )
                }
                 )}
                 </div>) 
            }
       
      </div>
    </>
  );
};

export default Home;
