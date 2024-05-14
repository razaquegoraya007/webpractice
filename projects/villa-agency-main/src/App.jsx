import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from "./pages/Home.jsx";
import PropertiesPage from "./pages/Properties.jsx"
import PropertyDetails from "./pages/PropertyDetails.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/home"  element={<Home />}/>
                <Route path="/properties"  element={<PropertiesPage />}/>
                <Route path="/details/:id"  element={<PropertyDetails/>}/>
                <Route path="/contact"  element={<ContactUsPage/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
