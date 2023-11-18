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
        
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/bookingpage">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        </nav>


            <BrowserRouter>
        <Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/bookingpage" element={<BookingPage/>}></Route>
</Routes>
</BrowserRouter>
       
        </>
    );
}

export default Nav;