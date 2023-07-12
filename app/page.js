"use client"
import  React,{useState} from "react";
import Header from "./header"
import Movie_row from "./movie_row"
import Footer from "./footer"
export default function Page(){
    return (
        <>
            <Header />
            <Movie_row/>
            <Footer/>
        </> 
    )
}
