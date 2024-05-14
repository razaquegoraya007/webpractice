import Navbar from "../components/Navbar.jsx";
import AllProperties from "../components/AllProperties.jsx";
import Footer from "../components/Footer.jsx";
import TopHeading from "../components/TopHeading.jsx";

const PropertiesPage = () => {
    return(
        <>
            <Navbar page='properties'/>
            <TopHeading target='PROPERTIES'/>
            <AllProperties/>
            <Footer/>
        </>
    )

}
export default PropertiesPage