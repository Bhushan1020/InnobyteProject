import {Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';

function App() {
  return (
   <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/rooms" element={<Rooms/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
    <Footer/>
   </>
  );
}

export default App;
