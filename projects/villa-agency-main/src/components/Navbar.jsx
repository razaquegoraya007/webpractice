import 'font-awesome/css/font-awesome.css';
import {Link} from "react-router-dom";
import {useState} from "react";

const Navbar=({page})=>{
        const [showMobilenav, setNavStyles]=useState(false)

    const  gotoMobilenav=()=>{
            setNavStyles(!showMobilenav)


    }

    return (
        <>
        {/**************Upper Section ( contact bar)*************/}
        <div className="hidden h-14 lg:flex items-center justify-between ps-28 pe-32 border-b-[1px] border-gray-300 mx-2">
            <div className=" flex gap-4">
                <span className="flex gap-2 items-center pr-6 border-r-[1px] border-gray-300">
                    <i className="fa fa-envelope  fa-lg text-orange-600"></i>
                    <p className="text-gray-600 ">info@company.com</p>
                </span>
                <span className="flex gap-2 items-center ">
                    <i className="fa fa-map  fa-lg text-orange-600"></i>
                    <p className="text-gray-600 text-sm">Sukkur IBA University</p>
                </span>

            </div>
            <div className=" flex gap-3 ">
                <span className="bg-gray-300  rounded-full p-2 flex align-middle hover:bg-orange-600 cursor-pointer"><i  className="fa fa-facebook text-[10px] text-gray-300 hover:text-orange-600 pt-1 px-1  bg-white rounded-full"></i></span>
                <span className="bg-gray-300  rounded-full p-2 flex align-middle hover:bg-orange-600 cursor-pointer"><i  className="fa fa-twitter text-[15px] text-white   rounded-full"></i></span>
                <span className="bg-gray-300  rounded-full p-2 flex align-middle hover:bg-orange-600 cursor-pointer"><i  className="fa fa-linkedin-square text-[15px]  text-white rounded-full"></i></span>
                <span className="bg-gray-300  rounded-full p-2 flex align-middle hover:bg-orange-600 cursor-pointer"><i  className="fa fa-instagram text-[15px] text-white rounded-full"></i></span>

            </div>


        </div>
            {/***********navbar second section***********/}

            <div className="h-24 border-b-[1px]  border-gray-300 flex justify-between items-center ps-2 lg:ps-10 xl:ps-28 pe-2 bg-white text-black xl:pe-32 lg:pe-10 sticky top-0 z-20">
                <div className="flex justify-between w-full md:w-auto "><Link to='/home' className="text-3xl me-0 md:me-8 font-bold ms-2 text-black">VILLA</Link><span onClick={gotoMobilenav} className=" font-bold me-2 inline md:hidden"><i
                    className="fa fa-bars fa-lg"></i></span>
                </div>

                {/************for desktop view*********/}
                <div className="hidden md:flex  md:gap-6 lg:gap-16 font-semibold items-center" >
                    <Link  to='/home' className={`hover:text-orange-600 ${(page==='home')?'text-orange-600':'text-black'}  cursor-pointer`}>Home</Link>
                    <Link  to='/properties' className={`hover:text-orange-600 ${(page==='properties')?'text-orange-600':'text-black'}  cursor-pointer`}>Properties</Link>
                    <Link  to={`/details/${0}`} className={`hover:text-orange-600 ${(page==='details')?'text-orange-600':'text-black'}  cursor-pointer`}>Property Details</Link>
                    <Link  to='/contact' className={`hover:text-orange-600 ${(page==='contact')?'text-orange-600':'text-black'}  cursor-pointer`}>Contact Us</Link>
                    <Link to='/contact'  className="w-48 h-10 bg-black rounded-3xl flex items-center cursor-pointer bg-opacity-80">
                        <span className="w-10 h-full bg-orange-600 rounded-full flex items-center justify-center"><i className="fa fa-calendar text-white text-[15px] "></i></span>
                        <p className="text-white hover:text-orange-600 ms-4">Schedule a visit</p>

                    </Link>
                </div>

            </div>
            {/**************for mobile view***********/}
            {showMobilenav && <div className="navanimation   gap-0 font-bold   w-[95%] mx-2 overflow-hidden  bg-white flex flex-col items-center  rounded-b-xl   md:hidden  fixed top-20 z-20 " >
                <Link to='/home' className="border-b  w-[96%] text-center py-3">Home</Link>
                <Link to='/properties' className="border-b w-[96%]  text-center py-3">Properties</Link>
                <Link to={`/details/${0}`} className=" border-b w-[96%] text-center py-3">Property Details</Link>
                <Link to='/contact' className=" w-[96%] text-center py-3 rounded-b-3xl">Contact Us</Link>
            </div>}
        </>
    )
}

export  default  Navbar;


