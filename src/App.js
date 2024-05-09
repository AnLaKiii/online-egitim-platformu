import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';
import { BasketPage } from './pages/BasketPage';
import { VideoPage } from './pages/VideoPage';



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/login-page" element={<LoginPage/>} />
      <Route path="/basket-page" element={<BasketPage/>} />
      <Route path="/video-page" element={<VideoPage/>} />
    </Routes>
   </Router>
  );
}

export default App;
