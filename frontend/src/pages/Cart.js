import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbPlus, TbMinus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  decreaseQty,
  deletefromCart,
  increaseQty,
} from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartproductItem = useSelector((state) => state.product.cartItem);
  console.log(cartproductItem);
  const dispatch = useDispatch();
  const totalPrice = cartproductItem.reduce(
    (acc, curr) => acc + parseFloat(curr.total),
    0
  );
  const totalQty = cartproductItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const navigate=useNavigate()
  return (
    <>
      <h3>
        <span className="flex items-center justify-center">
          {" "}
          <AiOutlineShoppingCart class="text-green-800 text-5xl" />
        </span>
      </h3>
      {cartproductItem.map((item) => (
        <div
          key={item.id}
          className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300"
        >
          <div className="p-3 bg-white rounded overflow-hidden">
            <img src={item.image} className="h-28 w-40 object-cover" />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
              <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
                {item.name}
              </h3>
              <div
                className="cursor-pointer text-slate-700 hover:text-red-500"
                onClick={() => dispatch(deletefromCart(item.id))}
              >
                <AiFillDelete />
              </div>
            </div>
            <p className="text-slate-500 font-medium">{item.category}</p>
            <p className="font-bold text-base">
              <span className="text-red-500">$</span>
              {item.price}
            </p>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <button
                  className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
                  onClick={() => dispatch(increaseQty(item))}
                >
                  <TbPlus />
                </button>
                <p className="font-semibold p-1">{item.qty}</p>
                <button
                  className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1"
                  onClick={() => dispatch(decreaseQty(item))}
                >
                  <TbMinus />
                </button>
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <p>Total </p>
                <p>
                  <span className="text-red-500">$</span>
                  {item.total}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full max-w-md  ml-auto">
        <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
        <div className="flex w-full py-2 text-lg border-b">
          <p>Total Qty :</p>
          <p className="ml-auto w-32 font-bold">{totalQty}</p>
        </div>
        <div className="flex w-full py-2 text-lg border-b">
          <p>Total Price</p>
          <p className="ml-auto w-32 font-bold">
            <span className="text-red-500">$</span> {totalPrice}
          </p>
        </div>
        <button
          className="bg-red-500 w-full text-lg font-bold py-2 text-white"
          onClick={()=>navigate('/payment')}
        >
          Payment
        </button>
      </div>
    </>
  );
}

export default Cart;
