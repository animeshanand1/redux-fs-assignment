import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartDashFill } from "react-icons/bs";
import Login from "../pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate=useNavigate()
  
  const userData=useSelector((state)=>state.user)
  const cartItemNumber=useSelector((state)=>state.product.cartItem)
  // console.log(userData);
  const dispatch=useDispatch()
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  const handleLogout=()=>{
    dispatch(logout())
    navigate('/login')
  }
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      <div className="flex items-center h-full justify-between">
        <Link to="/">
          <div className="h-10">
            {/* <img
              src="https://images.unsplash.com/photo-1613061527119-56ad37b8a581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt="logo"
              className="h-full"
            /> */}
            <h4><span className="text-red-700 font-bold">Shop</span><span className="font-bold text-green-400">Now</span></h4>
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to="/cart">
              <BsFillCartDashFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div
            className="text-2xl text-slate-600 relative"
            onClick={handleShowMenu}
          >
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              <FaUserAlt />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                <Link to="/newproduct">New Product</Link>
                {userData.isLoggedIn?<p onClick={handleLogout} className="cursor-pointer text-white px-2 bg-red-500">Logout</p>:<Link
                  to="/login"
                  className="cursor-pointer text-white px-2 bg-red-500"
                >
                  Login
                </Link>}
                
              </div>
            )}
          </div>
        </div>
      </div>{" "}
      {/*8th ka closing div*/}
    </header>
  );
}

export default Header;
