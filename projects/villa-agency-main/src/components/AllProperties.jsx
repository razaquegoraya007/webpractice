import 'font-awesome/css/font-awesome.css';
import {useState} from "react";
import {villas, apartments, penthouse} from "./dummyData.jsx";
import PropertyCard from "./PropertyCard.jsx";

const AllProperties = () => {
    const all=villas.slice(0,3).concat(apartments.slice(0,3)).concat(penthouse.slice(0,3))

    const [category,setCategory]=useState({
        showall: true,
        apartment: false,
        villaHouse:false,
        penthouse:false,
        current: all
    })



    return(
        <>

            {/********** Buttons **********/}
        <div className='my-12 px-4 flex justify-center flex-wrap gap-6 sm:gap-12'>
            <button onClick={()=>{setCategory({...category,showall: true,apartment: false,villaHouse: false,penthouse: false, current:all })}} className={`${(category.showall)?'bg-orange-600':'bg-black hover:text-orange-600 bg-opacity-[85%]'} text-white font-semibold px-6 py-3 rounded`}>Show All</button>
            <button onClick={()=>{setCategory({...category,showall: false,apartment: true,villaHouse: false,penthouse: false,  current:apartments})}} className={`${(category.apartment)?'bg-orange-600':'bg-black hover:text-orange-600 bg-opacity-[85%]'} text-white font-semibold px-6 py-3 rounded`}>Apartment</button>
            <button onClick={()=>{setCategory({...category,showall: false,apartment: false,villaHouse: true,penthouse: false,  current:villas})}} className={`${(category.villaHouse)?'bg-orange-600':'bg-black hover:text-orange-600 bg-opacity-[85%]'} text-white font-semibold px-6 py-3 rounded`}>Villa House</button>
            <button onClick={()=>{setCategory({...category,showall: false,apartment: false,villaHouse: false,penthouse: true,  current:penthouse})}} className={`${(category.penthouse)?'bg-orange-600':'bg-black hover:text-orange-600 bg-opacity-[85%]'} text-white font-semibold px-6 py-3 rounded`}>Penthouse</button>

        </div>

            {/*********** Property Cards ***********/}
            <div className='flex flex-wrap px-4 md:px-0 xl:px-4 mb-12 justify-center gap-12'>

                {
                    category.current.map((p)=>(
                       <PropertyCard key={p.id} property={p}/>
                    ))
                }
            </div>


            {/********** Pagination **************/}
            <div className='flex justify-center text-white gap-3 items-center my-20'>
                <a className='h-10 w-10 bg-black rounded-full flex justify-center items-center hover:bg-orange-600 font-semibold cursor-pointer'> 1</a>
                <a className='h-10 w-10 bg-orange-600 rounded-full flex justify-center items-center hover:bg-orange-600 font-semibold cursor-pointer'> 2</a>
                <a className='h-10 w-10 bg-black rounded-full flex justify-center items-center hover:bg-orange-600 font-semibold cursor-pointer'> 3</a>
                <a className='h-10 w-10 bg-black rounded-full flex justify-center items-center hover:bg-orange-600 font-semibold cursor-pointer'>
                    <i className="fa fa-angle-right"></i>
                    <i className="fa fa-angle-right"></i>
                </a>

            </div>
        </>
    )

}

export default AllProperties;