import React from "react";
import Homepage from './Homepage';
import BookingPage from "./BookingPage";
import { BrowserRouter } from "react-router-dom";
import {Routes , Route} from "react-router-dom";

function Nav(){
    return (
        <>
        <nav>
            <BrowserRouter>
        <Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>
</BrowserRouter>
        </nav>
        </>
    );
}

export default Nav;