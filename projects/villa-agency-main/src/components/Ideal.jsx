import {useState} from "react";
import {Link} from "react-router-dom";



const Details=({content})=>{
    return(
        <>
        <div className='grid grid-cols-12 mt-20'>


            {/*********Left Section**********/}
            <div className='col-span-12 lg:col-span-3 px-6 md:p-0 md:pr-6 h-fit '>
<div className='shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] rounded'>
    <div className='mx-7 flex justify-between py-6 border-b-[1px] border-gray-200'>
        <p className='font-semibold text-gray-400'>Total Flat Space</p>
        <h1 className='text-xl font-bold'>{content.flat} m2</h1>
    </div>
    <div className='mx-8 flex justify-between py-6 border-b-[1px] border-gray-200'>
        <p className='font-semibold text-gray-400'>Floor number</p>
        <h1 className='text-xl font-bold'>{content.floor}</h1>
    </div>
    <div className='mx-8 flex justify-between py-6 border-b-[1px] border-gray-200'>
        <p className='font-semibold text-gray-400'>Number of rooms</p>
        <h1 className='text-xl font-bold'>{content.rooms}</h1>
    </div>
    <div className='mx-8 flex justify-between py-6 border-b-[1px] border-gray-200'>
        <p className='font-semibold text-gray-400'>Parking Available</p>
        <h1 className='text-xl font-bold'>{content.parking}</h1>
    </div>
    <div className='mx-8 flex justify-between py-6 border-b-[1px] border-gray-200'>
        <p className='font-semibold text-gray-400'>Payment Process</p>
        <h1 className='text-xl font-bold'>{content.payment}</h1>
    </div>


</div>
            </div>

            {/************Middle Section***********/}
            <div className='col-span-12 lg:col-span-6 mt-10 lg:mt-0 pl-8 pr-10 h-[350px]'>
                <img className='h-full' src={content.image} alt="image"/>
            </div>


            {/***********Right Section************/}
            <div className='col-span-12 lg:col-span-3  mt-10 lg:mt-0  px-6'>
                <p className='font-bold text-lg'>{content.detailHeading}</p>
                <p className='text-gray-600 mt-6 leading-loose'>{content.detailText1}</p>

                <p className='text-gray-600 mt-6 leading-loose'>{content.detailText2}</p>
                <Link to='/contact'  className=" h-12 w-fit pr-6 mt-6 bg-black rounded-full flex items-center cursor-pointer ">
                    <span className="w-12 h-full bg-orange-600 rounded-full flex items-center justify-center"><i className="fa fa-calendar text-white text-[15px] "></i></span>
                    <p className="text-white hover:text-orange-600 ms-4 ">Schedule a visit</p>

                </Link>
            </div>

        </div>
        </>
    )
}




const Ideal=()=>{


    const [category, setCategory]=useState({
        apartment:true,
        villa:false,
        penthouse:false
    })


    const data=[
        {
            flat: '185',
            floor : '26th',
            rooms: 4,
            parking: "Yes",
            payment: 'Bank',
            image: '/assets/images/apartment2.jpg',
            detailHeading: 'Extra Info About Property',
            detailText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
            detailText2: 'When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.'
        },
        {
            flat: '250',
            floor : '26th',
            rooms: 5,
            parking: 'Yes',
            payment: 'Bank',
            image: '/assets/images/villa2.jpg',
            detailHeading: 'Detail Info About Villa',
            detailText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
            detailText2: 'Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.'
        },
        {
            flat: '320',
            floor : '34th',
            rooms: 6,
            parking: "Yes",
            payment: 'Bank',
            image: '/assets/images/penthouse2.jpg',
            detailHeading: 'Extra Info About Penthouse',
            detailText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.',
            detailText2: 'Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.'
        }
    ]

    const [content,setContent]=useState(data[0])



    return(
        <>
        <div className="bg-gray-50 py-20 px-2 md:px-28  ">

<div className='flex flex-col items-center md:block'>
    <hr className="border-0 w-4 h-[3px] bg-red-400 rotate-90  mt-4 -ms-24 md:-ms-1  "/>
    <p className="font-bold text-red-400 ps-2 ms-2  -mt-4 py-0 text-[19px] border-red-600">BEST DEAL</p>
</div>

            {/********** Buttons ********/}

            <div className='flex flex-col md:flex-row justify-between ' >
                <h1 className='text-4xl leading-snug font-bold w-full   md:w-[300px] text-center md:text-start  mt-4'>Find Your Best Deal Right Now!</h1>
                <span className='flex  flex-wrap justify-center mt-10 md:mt-0 gap-5 lg:place-self-end '>
                    <span onClick={()=>{setCategory({...category,apartment: true,villa: false,penthouse: false});setContent(data[0])}} className={`px-[28px] py-[12px] h-fit   text-white ${(category.apartment)?'bg-orange-600 border-orange-600': 'bg-black border-black'} font-semibold cursor-pointer rounded outline-none  border-[1px]  hover:border-gray-200`}  >Apartment</span>
                    <span onClick={()=>{setCategory({...category,apartment: false,villa: true,penthouse: false});setContent(data[1])}} className={`px-[28px] py-[12px]  h-fit text-white ${(category.villa)?'bg-orange-600 border-orange-600': 'bg-black border-black'} font-semibold cursor-pointer rounded border-[1px]  hover:border-gray-200 `}>Villa House</span>
                    <span onClick={()=>{setCategory({...category,apartment: false,villa: false,penthouse: true});setContent(data[2])}} className={`px-[30px] py-[12px]  h-fit text-white ${(category.penthouse)?'bg-orange-600 border-orange-600': 'bg-black border-black'} font-semibold cursor-pointer rounded border-[1px]  hover:border-gray-200 `}>Penthouse</span>
                </span>
            </div>
            <Details content={content}/>
        </div>

        </>
    )
}

export default Ideal;