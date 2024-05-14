import 'font-awesome/css/font-awesome.css';


import {useEffect, useState} from "react";

const Slider = () => {

    const [images, setImages] = useState({
        firstImage: true,
        secondImage: false,
        thirdImage: false
    })

    const gotoPrevious = () => {
        setImages(images=>{
            if(images.firstImage) return{ firstImage: false, secondImage: false, thirdImage: true}
            if(images.secondImage) return{ firstImage: true, secondImage: false, thirdImage: false}
            if(images.thirdImage) return{ firstImage: false, secondImage: true, thirdImage: false}
        })
    }

    const gotoNext = () => {
        setImages(images=>{
            if(images.firstImage) return{ firstImage: false, secondImage: true, thirdImage: false}
            if(images.secondImage) return{ firstImage: false, secondImage: false, thirdImage: true}
            if(images.thirdImage) return{ firstImage: true, secondImage: false, thirdImage: false}
        })

    }



    useEffect(()=>{
        const timeout = setInterval(() => {
            gotoNext()
        }, 5000);
        return () => clearInterval(timeout);
    },[])





    return (
        <>

            <div className="h-fit pb-9  ">

                {/********** Slider Images ***********/}
                <div className="w-screen-lg h-[100vh]  mx-auto relative">

                    {/********** First Image ***********/}
                    {images.firstImage && <div className='absolute  h-full w-full '>
                        <img className='h-full w-full object-cover absolute -z-10' src="/assets/images/slider1.jpg"
                             alt=""/>
                        <div className='px-16  md:px-28 mt-40   mx-auto lg:mx-40  w-fit   '>
                            <p className='bg-white w-fit px-4 py-1 text-lg font-semibold'>Sukkur, <span
                                className='text-orange-600'>Pakistan</span></p>
                            <h1 className='text-white font-bold text-4xl sm:text-6xl  mt-10'>HURRY!</h1>
                            <h1 className='text-white font-bold text-4xl sm:text-6xl  w-auto md:w-96 leading-snug'> GET
                                THE BEST VILLA FOR YOU</h1>
                        </div>
                    </div>}

                    {/********** Second Image ***********/}
                    {images.secondImage && <div className='absolute  h-full w-full '>

                        <img className='h-full w-full object-cover absolute -z-10' src="/assets/images/slider2.jpg"
                             alt=""/>
                        <div className='px-16 md:px-28 w-fit mx-auto mt-40 lg:mx-40 '>
                            <p className='bg-white w-max px-4 py-1 text-lg font-semibold'>Islamabad, <span
                                className='text-orange-600'>Pakistan</span></p>
                            <h1 className='text-white font-bold text-4xl sm:text-6xl  mt-10'>BE QUICK!</h1>
                            <h1 className='text-white font-bold text-4xl sm:text-6xl   w-fit md:w-96 leading-snug'> GET
                                THE BEST VILLA IN TOWN</h1>
                        </div>
                    </div>}

                    {/********** Third Image ***********/}
                    {images.thirdImage && <div className='absolute  h-full w-full '>
                        <img className='h-full w-full object-cover absolute -z-10' src="/assets/images/slider3.jpg"
                             alt=""/>
                        <div className='px-16 md:px-28 mx-auto mt-40   w-fit lg:mx-40  '>
                            <p className='bg-white w-fit  px-4 py-1 text-lg font-semibold'>Quetta, <span
                                className='text-orange-600'>Pakistan</span></p>
                            <h1 className='text-white font-bold text-4xl sm:text-6xl   mt-10'>ACT NOW!</h1>
                            <h1 className='text-white font-bold text-4xl sm:text-6xl   w-auto md:w-96 leading-snug'> GET
                                THE HIGHEST LEVEL PENTHOUSE</h1>
                        </div>
                    </div>}


                </div>
                <div className='relative'>


                    <div className='flex absolute gap-2 bottom-1 left-[50%] '>
                        <div onClick={() => {
                            setImages({...images, firstImage: true, secondImage: false, thirdImage: false})

                        }}
                             className={`h-4 w-4  rounded-full cursor-pointer ${(images.firstImage) ? 'bg-orange-600' : 'bg-gray-200 bg-opacity-20'}`}></div>
                        <div onClick={() => {
                            setImages({...images, firstImage: false, secondImage: true, thirdImage: false})

                        }}
                             className={`h-4 w-4  rounded-full cursor-pointer ${(images.secondImage) ? 'bg-orange-600' : 'bg-gray-200 bg-opacity-50'}`}></div>
                        <div onClick={() => {
                            setImages({...images, firstImage: false, secondImage: false, thirdImage: true})

                        }}
                             className={`h-4 w-4  rounded-full cursor-pointer ${(images.thirdImage) ? 'bg-orange-600' : 'bg-gray-200 bg-opacity-50'}`}></div>
                    </div>
                </div>


                {/******** Buttons *********/}
                <div onClick={gotoPrevious}
                     className='h-12 w-12  bg-gray-500 bg-opacity-40 rounded-full top-[80%] cursor-pointer left-2  md:left-10 absolute flex justify-center items-center hover:bg-opacity-70 '>
                    <i className="fa fa-angle-up text-3xl text-center -ms-2 font-bold text-gray-50 -rotate-90"></i>
                </div>
                <div onClick={gotoNext}
                     className='h-12 w-12  bg-gray-500 bg-opacity-40 rounded-full top-[80%] cursor-pointer right-2 md:right-10 absolute flex justify-center items-center hover:bg-opacity-70'>
                    <i className="fa fa-angle-up text-3xl text-center ms-2 font-bold text-gray-50 rotate-90"></i></div>


            </div>


        </>
    )
}

export default Slider