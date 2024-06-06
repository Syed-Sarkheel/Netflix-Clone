import React from "react"
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className="flex items-center justify-between z-[100] w-full absolute">
        <img src={Logo} alt="netflix-logo" className="ml-2 w-36"/>
        <div>
            <button className="text-white cursor-pointer p-2 hover:text-red-600 mr-4">Sign-In</button>
            <button className="text-white rounded cursor-pointer bg-red-600 p-2 border border-red-600 mr-4">Sign-Up</button>
        </div>
    </div>
  )
}
export default Navbar