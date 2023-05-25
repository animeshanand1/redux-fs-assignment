import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart, setDataProduct} from "../redux/productSlice";

function Home() {
  const productData = useSelector((state) => state.product.productList);
  // console.log("productData", productData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/allproducts");
        const data = await response.json();
        // console.log("data", data);
        dispatch(setDataProduct(data.products));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  
  const handleCart = useCallback((item) => {
    const payload = {
      id: item._id,
      name: item.name,
      category: item.category,
      price: item.price,
      image:item.image
    };
    dispatch(addtoCart(payload));
   
  }, [dispatch]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {productData.slice(0, 50).map((item) => (
        <div key={item._id} className="bg-white max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer hover:transform hover:scale-105">
          <img className="w-full" src={item.image} alt="Product" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.name}</div>
            <p className="text-gray-700 text-base">{item.category}</p>
            <p className="text-gray-700 text-base">{item.price}$</p>
          </div>

          <div className="px-6 py-4">
            <button onClick={() => handleCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
