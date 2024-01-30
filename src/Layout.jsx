import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import APropos from "./pages/APropos";
import Fiche from './pages/Fiche';
import './styles/layout.scss'
import Erreur from './pages/Erreur';


export default function Layout () {
    return (
        <div>
            <Router>
                <Header />
                <div className='content'>
                <Routes>
                    <Route path='/' element = {<Home />} />
                    <Route path='/APropos' element = {<APropos />} />
                    <Route path='/*' element = {<Erreur />}/>
                    <Route path='/Fiche/:id' element = {<Fiche />}/>
                </Routes>
                </div>
                <Footer />
            </Router>   
        </div>
    )
}