import 'font-awesome/css/font-awesome.css';

const Video=()=>{
    return(
        <>
            <img className="absolute h-[680px]   md:h-[650px]    blur-[3px] w-full object-cover -z-10 " src='/assets/images/videoBackground.jpg' alt=""/>

            <div className='pb-28'>

                <div className="  flex  flex-col  items-center">
            <span className='mt-28'>
                 <hr className="border-0 w-4 h-[3px] bg-red-400 rotate-90  -ms-2    "/>
                 <p className="font-semibold text-red-400 ps-2 -mt-4 py-0 text-[19px] border-red-600">VIDEO VIEW</p>
            </span>
            <h1 className="text-white text-5xl w-full font-bold text-center sm:w-96 mt-6">Get Closer View & Different Feeling</h1>
        </div>

            <div className="h-[200px]  md:h-[300px] lg:h-[400px] xl:h-[500px] w-[95%] md:w-[80%] bg-no-repeat bg-cover   mx-auto mt-28  rounded-lg flex items-center justify-center bg-[url('/assets/images/video.jpg')]  shadow-[0px_0px_20px_1px_rgba(0,0,0,0.25)]" >
                <a href="https://www.youtube.com" target="_blank" className="p-4 bg-opacity-70 bg-orange-400 rounded-full cursor-pointer">
               <span className="bg-white  h-12 w-12 flex justify-center items-center   rounded-full "> <i className="fa fa-play text-xl text-orange-600" ></i></span></a>

            </div>
                {/********** Features  *********/}
                <div className='mt-36 mx-28 lg:justify-center xl:mx-28 flex flex-col lg:flex-row items-center gap-14 lg:gap-18 '>
                    <div className=" w-fit flex items-center gap-6  bg-orange-100 rounded-md px-12 py-6 bg-opacity-60 relative">
                        <span className='w-12 h-12 absolute -top-5 -right-5 rounded-full bg-orange-600'></span>
                        <h1 className='text-orange-600 text-5xl font-bold'>34</h1>
                        <p className='font-bold w-28'>Buildings Finished Now</p>
                    </div>
                    <div className=" w-fit flex items-center gap-6  bg-orange-100 rounded-md px-12 py-6 bg-opacity-60 relative">
                        <span className='w-12 h-12 absolute -top-5 -right-5 rounded-full bg-orange-600'></span>
                        <h1 className='text-orange-600 text-5xl font-bold'>12</h1>
                        <p className='font-bold w-28'> Years Experience</p>
                    </div>
                    <div className=" w-fit flex items-center gap-6  bg-orange-100 rounded-md px-12 py-6 bg-opacity-60 relative">
                        <span className='w-12 h-12 absolute -top-5 -right-5 rounded-full bg-orange-600'></span>
                        <h1 className='text-orange-600 text-5xl font-bold'>24</h1>
                        <p className='font-bold w-24'> Awards Won 2023</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Video