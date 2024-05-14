
const Contact = () => {
  return(
      <>
          <img className="absolute h-[650px]   md:h-[600px]    blur-[3px] w-full object-cover -z-10 " src="/assets/images/locationBackground.jpg" alt=""/>

          {/********** Top Headings ************/}
          <div className='pb-28'>
              <div className="  flex  flex-col  items-center">
            <span className='mt-28'>
                 <hr className="border-0 w-4 h-[3px] bg-red-400 rotate-90  -ms-2    "/>
                 <p className="font-semibold text-red-400 ps-2 -mt-4 py-0 text-[19px] border-red-600">CONTACT US</p>
            </span>
                  <h1 className="text-white text-5xl w-full font-bold text-center sm:w-96 mt-6">Get In Touch With Our Agents</h1>
              </div>
          </div>



            <div className='flex mx-4 mb-20 xl:m-0 flex-col lg:flex-row justify-center gap-12 lg:gap-8 xl:gap-12'>
                <div >

                    {/************ Map *************/}
                    <iframe className='w-full lg:w-[500px]  xl:w-[650px] h-[530px] bg-gray-50 rounded-2xl shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9051711870015!2d68.79858617461322!3d27.720214024925387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d33c0905f7e9%3A0x13f5a86d6dd17a8b!2sSukkur%20IBA%20University!5e0!3m2!1sen!2s!4v1693900658337!5m2!1sen!2s"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>


                    {/*********** Contact Details*************/}
                    <div className='mt-20 gap-12 h-fit  lg:gap-0 mb-10 md:mb-36 flex flex-col lg:flex-row  justify-center  items-center md:justify-between '>
                        <div className=' px-6   py-6  shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] w-full lg:w-fit flex flex-row lg:flex-col xl:flex-row gap-6 rounded-lg items-center'>
                            <img className='object-contain' src="/assets/icons/phone-icon.png" alt=""/>
                            <span>
                                <p className='text-black font-bold text-2xl'>010-020-0340</p>
                                <p className='text-gray-500 font-semibold'>Phone Number</p>
                            </span>
                        </div>
                        <div className=' px-6   py-6  shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] w-full lg:w-fit flex gap-6 flex-row lg:flex-col xl:flex-row items-center rounded-lg'>
                            <img className='object-contain h-[52px]'  src="/assets/icons/email-icon.png" alt=""/>
                            <span>
                                <p className='text-black font-bold text-2xl'>info@villa.co</p>
                                <p className='text-gray-500 font-semibold'>Business Email</p>
                            </span>
                        </div>

                    </div>
                </div>


                {/*********** Send Message *************/}
                <div className=' w-full lg:w-[400px] xl:w-[450px] h-fit shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] px-8 py-5 bg-white rounded-2xl'>

                    <form className='flex flex-col gap-4' action="#">
                        <label className='mt-4' htmlFor='name' >Full Name</label>
                        <input className='bg-gray-100 p-3 rounded-3xl' id='name' autoComplete={'ABC'} type="text" placeholder='Your Name'/>
                        <label className='mt-4' htmlFor="mail">Email Address</label>
                        <input className='bg-gray-100 p-3 rounded-3xl' id='mail' autoComplete={'ABC@gmail.com'} type="text" placeholder='Your Email'/>
                        <label className='mt-4' htmlFor="subject">Subject</label>
                        <input className='bg-gray-100 p-3 rounded-3xl' id='subject' autoComplete={'Subject'} type="text" placeholder='Subject...'/>
                        <label className='mt-4' htmlFor="message">Message</label>
                        <textarea className='bg-gray-100 p-3 rounded-3xl'  id="message" autoComplete='no message' cols="30" rows="6" placeholder='Your Message'></textarea>
                        <button className='bg-black text-white font-semibold  hover:bg-orange-600 w-fit px-4 py-2 rounded-3xl my-4 '>Send Message</button>
                    </form>
                </div>

            </div>
      </>
  )
}
export default Contact
