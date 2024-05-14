
import {useState} from "react";
import {Link} from "react-router-dom";
const SingleProperty=({property})=>{
    const [answers, setAnswer]=useState({
        answer1: true,
        answer2: false,
        answer3: false
    })


    return(
        <>
        <div className='flex flex-col w-fit mx-4 md:flex-row px-0 md:px-28 py-28 justify-center gap-12 xl:gap-24' >
            <div className='w-full md:w-[730px]'>
                <img className='h-[440px] w-full object-cover ' src={property.image} alt=""/>
                <div className='my-8 pb-5 border-b'>
                    <p className='w-fit bg-orange-600 bg-opacity-30 px-3 py-1 rounded'>{property.category}</p>
                    <h1 className='font-bold text-3xl my-6'>{property.address}</h1>
                </div>
                <p className='leading-loose text-gray-500 '>Get <span className='font-bold'>the best villa agency</span> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a className='text-blue-600 font-semibold ' href=''>best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.</p>
                <p className='leading-loose text-gray-500 py-6'>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>

                {/**********Questions***************/}
                <div className="bg-gray-100 rounded-lg px-4 mt-20 ">

                    <p onClick={()=>{setAnswer({...answers,answer1: !answers.answer1,answer2: false,answer3: false})}} className={` font-bold  py-4 ${(answers.answer1)?'text-orange-600':'text-black'}  cursor-pointer border-b-[1px] border-gray-300 text-lg` }>Best useful links ?</p>
                    { answers.answer1 && <p className="py-4 text-[16px]">Get <span className="font-bold">the best villa</span> website
                        template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a
                            className="text-blue-600 font-semibold" href="">best free CSS templates</a> in the world. Please tell your friends about it.chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}


                    <p onClick={()=>{setAnswer({...answers,answer1: false,answer2: !answers.answer2,answer3: false})}} className={` font-bold  py-4 ${(answers.answer2)?'text-orange-600':'text-black'}  cursor-pointer border-b-[1px] border-gray-300 text-lg` }>How Does this work ?</p>
                    {
                        answers.answer2 && <p className="py-4 text-[16px]">Dolor <span className="font-bold">almesit amet</span>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <span
                            className="text-red-400 text-sm tracking-wider">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}


                    <p onClick={()=>{setAnswer({...answers,answer1: false,answer2: false,answer3:!answers.answer3})}} className={` font-bold  py-4 border-b-[1px] ${(answers.answer3)?'text-orange-600':'text-black border-none'}  cursor-pointer  border-gray-300 text-lg` }>Why is Villa Agency the best ?</p>
                    {
                        answers.answer3 && <p className="py-4 text-[16px]">Dolor <span className="font-bold">almesit amet</span>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <span
                            className="text-red-400 text-sm tracking-wider">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}
                </div>
            </div>

            {/***************Right Section****************/}
            <div className=''>
                <div className="  w-full  rounded-lg  shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] px-9 ">
                    <div className="flex flex-row  md:flex-col lg:flex-row py-8 text-start sm:text-center md:text-center lg:text-start  items-center gap-8   md:gap-1 lg:gap-8 border-b-[1px] border-gray-300">
                        <img src="/assets/icons/info-icon-01.png" alt=""/>
                        <div>
                            <h1 className="text-2xl font-semibold ">{property.area} m<span className="">2</span></h1>
                            <p className="text-gray-400 font-semibold mt-1">Total Flat Spaces</p>
                        </div>
                    </div>
                    <div className="flex flex-row  md:flex-col lg:flex-row py-8 text-start sm:text-center md:text-center lg:text-start  items-center gap-8   md:gap-1 lg:gap-8 border-b-[1px] border-gray-300">
                        <img src="/assets/icons/info-icon-02.png" alt=""/>
                        <div>
                            <h1 className="text-2xl font-semibold ">Contract</h1>
                            <p className="text-gray-400 font-semibold mt-1">Contract Ready</p>
                        </div>
                    </div>
                    <div className="flex flex-row  md:flex-col lg:flex-row py-8 text-start sm:text-center md:text-center lg:text-start  items-center gap-8   md:gap-1 lg:gap-8 border-b-[1px] border-gray-300">
                        <img src="/assets/icons/info-icon-03.png" alt=""/>
                        <div >
                            <h1 className="text-2xl font-semibold ">Payment</h1>
                            <p className="text-gray-400 font-semibold mt-1">Payment Process</p>
                        </div>
                    </div>
                    <div className="flex flex-row  md:flex-col lg:flex-row py-8 text-start sm:text-center md:text-center lg:text-start  items-center gap-8   md:gap-1 lg:gap-8 ">
                        <img src="/assets/icons/info-icon-04.png" alt=""/>
                        <div >
                            <h1 className="text-2xl font-semibold ">Safety</h1>
                            <p className="text-gray-400 font-semibold mt-1">24/7 Under Control</p>
                        </div>
                    </div>

                </div>
                <Link to='/contact'  className=" h-12 w-fit pr-6 mt-6 bg-black rounded-full flex items-center cursor-pointer mx-auto">
                    <span className="w-12 h-full bg-orange-600 rounded-full flex items-center justify-center"><i className="fa fa-calendar text-white text-[15px] "></i></span>
                    <p className="text-white hover:text-orange-600 ms-4 ">Schedule a visit</p>

                </Link>
            </div>
        </div>
        </>
    )
}
export default SingleProperty;