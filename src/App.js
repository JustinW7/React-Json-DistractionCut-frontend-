
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import WatchHistory from './pages/WatchHistory';





function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>
      <Route path='/landingpage' element={<LandingPage/>}/>
    
     <Route path='/home' element={<Home/>}/>
    <Route path='/watchhistory' element={<WatchHistory/>}/>
    
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
