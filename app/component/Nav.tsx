'use client'
import Link from "next/link"
import { useState } from "react"

const Nav =()=>{

     const [showDropDown, setShowDropDown] = useState(false)
    return(
<div>
    <nav className="flex justify-between items-center  w-full px-8 py-6 shadow-md fixes top-0 z-50 bg-white">
        <h1 className="text-2xl  cursor-pointer hover:text-sky-600 transition font-semibold">UBMSS</h1>


    <div className="flex-1 flex justify-end relative">
                <button
                    onClick={() => setShowDropDown(prev => !prev)}
                    className="flex items-center gap-2 font-semibold py-2 px-6 rounded-md bg-gradient-to-r- from-sky-400 to bg-sky-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Login
                    {/* <ChevronDown className={`transition-transform duration-200 ${showDropDown ? 'rotate-180' : ''}`} size={18} /> */}
                </button>
                {showDropDown && (
                    <div className="absolute top-full mt-2 right-0 w-48  rounded-md shadow-lg z-50 animate-fade-in">
                       <Link href="./component/Admin" className="block px-4 py-2 hover:bg-gray-300 text-sm text-gray-700">
                        admin 
                        </Link>
                        <Link href='./component/Student' className="block px-4 py-2 hover:bg-gray-300 text-sm text-gray-700">
                        student
                        </Link>
                   
                    </div>
                )}
            </div>
    {/* <button className="">student</button> */}
  
    </nav>
</div>
    )
}
export default Nav