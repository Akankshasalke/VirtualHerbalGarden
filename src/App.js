import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PlantCategory from './Pages/PlantCategory';
import Plant from './Pages/Plant';
import LoginSignup from './Pages/LoginSignup';
import Add from './Pages/add'; // Ensure you have this import for the Add component
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/digestivehealth' element={<PlantCategory category="digestivehealth" />} />
                    <Route path='/immunity' element={<PlantCategory category="immunity" />} />
                    <Route path='/skincare' element={<PlantCategory category="skincare" />} />
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
