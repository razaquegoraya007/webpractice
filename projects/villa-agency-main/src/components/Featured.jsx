import {useState} from "react";

const Featured=()=>{

    const [answers, setAnswer]=useState({
        answer1: true,
        answer2: false,
        answer3: false
    })




    return (
        <>
        <div className="p-10 xl:p-28 grid grid-cols-12   ">

            {/*********left section************/}

            <div className="col-span-12  md:col-span-4 h-fit  px-0 md:px-8 h-76 relative">
                <img className='h-[450px] w-[90vw]  object-cover ' src="/assets/images/featured.jpg" alt="ab"/>
                <div className='bg-orange-600 h-fit absolute -left-3 -bottom-10 rounded-full p-3  md:p-4 cursor-pointer  '>
                <img className='h-[60px] md:h-[70px]'  src="/assets/icons/featured-icon.png" alt=""/>
                </div>
            </div>

            {/***************center section**************/}
            <div className="col-span-12    md:col-span-5 pr-8 mt-28 md:mt-0" >
                <hr className="border-0 w-4 h-0.5 bg-red-400 rotate-90  -ms-2 mt-2 absolute  "/>
                <p className="font-bold text-red-400 ps-2 -mt-1 py-0 border-red-600">FEATURED</p>
                <p className="font-bold text-5xl pr-16 text-start  leading-tight mt-4 ">Best Appartment & Sea View</p>
                <div className="bg-gray-100 rounded-lg px-4 mt-20 ">

                    <p onClick={()=>{setAnswer({...answers,answer1: !answers.answer1,answer2: false,answer3: false})}} className={` font-bold  py-4 ${(answers.answer1)?'text-orange-600':'text-black'}  cursor-pointer border-b-[1px] border-gray-300 text-lg` }>Best useful links ?</p>
                    { answers.answer1 && <p className=" overflow-hidden py-4 text-[16px]">Get <span className="font-bold">the best villa</span> website
                        template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a
                            className="text-blue-600 font-semibold"
                            href="">best free CSS templates</a> in the world. Please tell your friends about it.</p>}


                    <p onClick={()=>{setAnswer({...answers,answer1: false,answer2: !answers.answer2,answer3: false})}} className={` font-bold  py-4 ${(answers.answer2)?'text-orange-600':'text-black'}  cursor-pointer border-b-[1px] border-gray-300 text-lg` }>How Does this work ?</p>
                    {
                        answers.answer2 && <p className=" py-4 text-[16px]">Dolor <span className="font-bold">almesit amet</span>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <span
                                className="text-red-400 text-sm tracking-wider"
                               >adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}


                    <p onClick={()=>{setAnswer({...answers,answer1: false,answer2: false,answer3: !answers.answer3})}} className={` font-bold  py-4 border-b-[1px] ${(answers.answer3)?'text-orange-600':'text-black border-none'}  cursor-pointer  border-gray-300 text-lg` }>Why is Villa Agency the best ?</p>
                    {
                        answers.answer3 && <p className=" py-4 text-[16px]">Dolor <span className="font-bold">almesit amet</span>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <span
                            className="text-red-400 text-sm tracking-wider"
                        >adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
                </div>
            </div>

            {/***********Right Section***********/}
            <div className="col-span-12 md:col-span-3 mt-10 md:mt-0 ">
                <div className="    rounded-lg  shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] px-6 ">
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row py-8 text-center md:text-start  items-center gap-1 sm:gap-8  md:gap-1 lg:gap-8 border-b-[1px] border-gray-300">
        <img src="/assets/icons/info-icon-01.png" alt=""/>
        <div>
<h1 className="text-2xl font-semibold ">250 m<span className="">2</span></h1>
            <p className="text-gray-400 font-semibold mt-1">Total Flat Spaces</p>
        </div>
    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row py-8 items-center gap-1 sm:gap-8  md:gap-1 lg:gap-8 text-center md:text-start border-b-[1px] border-gray-300">
                        <img src="/assets/icons/info-icon-02.png" alt=""/>
                        <div>
                            <h1 className="text-2xl font-semibold ">Contract</h1>
                            <p className="text-gray-400 font-semibold mt-1">Contract Ready</p>
                        </div>
                    </div>
                    <div className="flex flex-col  sm:flex-row md:flex-col lg:flex-row py-8  items-center gap-1 sm:gap-8  md:gap-1 lg:gap-8 text-center md:text-start border-b-[1px] border-gray-300">
                        <img src="/assets/icons/info-icon-03.png" alt=""/>
                        <div >
                            <h1 className="text-2xl font-semibold ">Payment</h1>
                            <p className="text-gray-400 font-semibold mt-1">Payment Process</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-1 sm:gap-8  md:gap-1 lg:gap-8  text-center md:text-start py-8 items-center ">
                        <img src="/assets/icons/info-icon-04.png" alt=""/>
                        <div >
                            <h1 className="text-2xl font-semibold ">Safety</h1>
                            <p className="text-gray-400 font-semibold mt-1">24/7 Under Control</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export  default  Featured;