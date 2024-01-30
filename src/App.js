import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/screens/Home';
import Main from './components/Main';
import About from './components/About';
import Serve from './components/screens/Serve';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import SideBar from './components/SideBar';
import AdminDashBoard from './components/screens/AdminDashBoard';
import Mains from './components/Mains';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact element={<Main child={<Home/>}/>} />
          <Route path='/about' exact element={<Main child={<About/>}/>} />
          <Route path='/service' exact element={<Main child={<Serve/>}/>} />
          <Route path='/login' exact element={<Main child={<Login/>}/>} />
          <Route path='/register' exact element={<Main child={<Register/>}/>} />
          <Route path='/sidebar' exact element={<SideBar/>} />
          <Route path='/admindash' exact element={<Mains child={<AdminDashBoard/>}/>} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
