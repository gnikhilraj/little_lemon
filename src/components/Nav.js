import React from "react";
import Homepage from './Homepage';
import BookingPage from "./BookingPage";
import { BrowserRouter } from "react-router-dom";
import './Nav.css'
import {Routes , Route} from "react-router-dom";

function Nav(){
    return (
        <>
        <nav>
        <ul>
        <img src="" alt="logo"/>
        
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        </nav>


            <BrowserRouter>
        <Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/bookingpage" element={<BookingPage />}></Route>
</Routes>
</BrowserRouter>
       
        </>
    );
}

export default Nav;