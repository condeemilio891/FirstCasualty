import Navbar from './Components/NavBar/NavBar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ALPost from './pages/ALPost';
import UR from './pages/UR';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<ALPost/>} />
        <Route path="/russiaUkraine" element={<UR />} />
    </Routes>
</Router>
  );
}

export default App;
