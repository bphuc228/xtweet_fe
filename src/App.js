import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <div className='SideBar'>
      <Link className='LinkItem' to="/">Home</Link>
      <Link className='LinkItem' to="/login">Log In</Link>
      <Link className='LinkItem' to="/register">Register</Link>
      <Link className='LinkItem' to="/feed">News</Link>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
