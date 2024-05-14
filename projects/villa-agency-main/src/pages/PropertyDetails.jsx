import Navbar from "../components/Navbar.jsx";
import TopHeading from "../components/TopHeading.jsx";
import SingleProperty from "../components/SingleProperty.jsx";
import Ideal from "../components/Ideal.jsx";
import Footer from "../components/Footer.jsx";
import {useParams} from "react-router-dom";
import {villas,apartments,penthouse} from "../components/dummyData.jsx";

const PropertyDetails=()=>{
    const { id } = useParams();
     let property = (id<10)?villas[id]:(id<20)?apartments[id-10]:penthouse[id-20]
    return(
        <>
            <Navbar page='details'/>
            <TopHeading target='SINGLE PROPERTY'/>
            <SingleProperty property={property}/>
            <Ideal/>
            <Footer/>
        </>
    )
}

export default PropertyDetails;