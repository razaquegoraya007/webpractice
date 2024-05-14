import Navbar from "../components/Navbar.jsx";
import TopHeading from "../components/TopHeading.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Footer from "../components/Footer.jsx";

const ContactUsPage=({})=>{
    return(
        <>
            <Navbar page='contact'/>
            <TopHeading target='CONTACT US'/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default ContactUsPage