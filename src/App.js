import './App.css';
import {Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
   <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    <Footer/>
   </>
  );
}

export default App;
