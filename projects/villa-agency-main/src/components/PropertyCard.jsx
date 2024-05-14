import {Link} from "react-router-dom";
const PropertyCard=({property})=>{

    return(
        <>
        <div  className='min-w-[250px] h-auto lg:min-w-[200px] max-w-[300px]  bg-gray-100 p-6 rounded-xl mt-4'>
            <img className='rounded-xl' src={property.image} alt=""/>
            <span className='flex justify-between mt-6' >
                <p className='w-fit bg-orange-600 bg-opacity-30 px-3 py-1 rounded'>{property.category}</p>
                <p className='font-bold text-2xl sm:text-lg  md:text-2xl text-orange-600'>$ {property.price}</p>
            </span>
            <h1 className='font-bold text-xl my-6'>{property.address}</h1>
            <div className='pb-6 border-b-[1px] border-gray-200 mb-6'>
                <span className='flex gap-4'>
                <p>Bedrooms: <span className='font-bold'>{property.rooms}</span></p>
                <p>Bathrooms: <span className='font-bold'>{property.bath}</span></p>
                </span>
                <span className='flex gap-4'>
                <p>Area: <span className='font-bold'>{property.area}m2</span></p>
                <p>Floor: <span className='font-bold'>{property.floor}</span></p>
                </span>
                <p>Parking: <span className='font-bold'>{property.parking}</span></p>
            </div>
<div className='flex justify-center'>
            <Link to={`/details/${property.id}`} className='bg-black w-fit hover:bg-orange-600  px-8 py-2 cursor-pointer rounded-3xl text-white text-md font-semibold ' >Schedule a visit</Link>
</div>
        </div>
        </>
    )
}

export default PropertyCard;