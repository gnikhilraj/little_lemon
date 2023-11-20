import React from "react";
import Homepage from './Homepage';
import BookingPage from "./BookingPage";
import { BrowserRouter, Link ,Routes , Route} from "react-router-dom";
import './Nav.css'
import {} from "react-router-dom";
import BookingForm from "./BookingForm";

function Nav(){
    return (
        <>
        <nav>
        <ul>
        <img src="" alt="logo"/>
        
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/bookingpage">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </nav>


          
        <Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/bookingpage" element={<BookingPage/>}></Route>
</Routes>

       
        </>
    );
}

export default Nav;