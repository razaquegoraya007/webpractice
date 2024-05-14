import Navbar from "../components/Navbar.jsx";
import Featured from "../components/Featured.jsx";
import Video from "../components/Video.jsx";
import Slider from "../components/Slider.jsx";
import Ideal from "../components/Ideal.jsx";
import Properties from "../components/Properties.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";


const Home = ()=>{
    return(
        <>
            <Navbar page='home'/>
            <Slider/>
            <Featured/>
            <Video/>
            <Ideal/>
            <Properties/>
            <Contact/>
            <Footer/>

            
        </>
    )

};

export default Home

