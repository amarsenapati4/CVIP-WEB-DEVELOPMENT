import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import "./App.scss";
import Header from './Component/Header/Header';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
   </Router>
  );
}

export default App;
