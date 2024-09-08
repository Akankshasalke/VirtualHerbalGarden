import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PlantCategory from './Pages/PlantCategory';
import Plant from './Pages/Plant';
import LoginSignup from './Pages/LoginSignup';
import Add from './Pages/add'; // Ensure you have this import for the Add component
import Footer from './Components/Footer/Footer';
import digestivehealth_banner from './Components/Assets/1.png';
import immunity_banner from './Components/Assets/2.png';
import skincare_banner from './Components/Assets/3.png';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/digestivehealth' element={<PlantCategory banner={digestivehealth_banner} category="digestive health" />} />
                    <Route path='/immunity' element={<PlantCategory banner={immunity_banner} category="immunity" />} />
                    <Route path='/skincare' element={<PlantCategory banner={skincare_banner} category="skin care" />} />
                    <Route path='/plant' element={<Plant />}>
                        <Route path=':plantID' element={<Plant />} />
                    </Route>
                    <Route path='/add' element={<Add />} />
                    <Route path='/login' element={<LoginSignup />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
