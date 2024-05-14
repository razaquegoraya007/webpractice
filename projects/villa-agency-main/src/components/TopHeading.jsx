const TopHeading = ({target}) => {
    return(
        <>
        <div className={`bg-[url("/assets/image.jpg")] bg-no-repeat bg-cover   h-96  grayscale-[50%] w-full flex justify-center items-center`}>
            <div >
                <p className='bg-white text-black font-semibold w-fit mx-auto px-6 py-2'><a href="">HOME</a>/{target}</p>
                <h2 className='text-center text-white font-extrabold text-5xl mt-8'>{target}</h2>
            </div>
        </div>
        </>
    )

}


export default TopHeading