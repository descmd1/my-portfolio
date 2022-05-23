import React from "react";
import { Link } from "react-router-dom";

const ShowCase =() =>{
    return(
        <>
           <section className="showcase">
           <div className="overlay flex flex-col items-center justify-center text-white 
                px-5">
                    <h1 className="text-5xl text-bold 
                    lg:text-center leg:text-7xl lg:text-56 
                    text-right mb-10 flex flex-col items-center justify-center mt-20">Hi, I am Christopher Aondoakaa, 
                      <span 
                    className="text-green-500">a Full Stack Engineer.</span> 
                    I am striving to become a dedicated and beneficial 
                    addition to the global economy.</h1>
                </div>
                <div className="overlay flex flex-col items-center justify-center text-white 
                px-5">
                    <h1 className="text-5xl text-bold 
                    lg:text-center leg:text-7xl lg:text-56 
                    text-right mb-10 flex flex-col items-center justify-center mt-20">I also create <span className="text-green-500">brand awareness</span> for small businesses</h1>
                </div>
                <div className="ml-auto lg:ml-0 flex items-center justify-center">               
                    <Link to="/hire" className="mr-5
                     bg-green-500 p-2 px-4 rounded-full 
                      font-semibold transition-all hover:bg-green-800">Get Started</Link>
                    <Link to="/projects" className="mr-5
                     bg-white text-green-500 p-2 px-4 rounded-full 
                      font-semibold transition-all hover:bg-green-800 hover:text-white">Projects</Link>
                    </div>
            </section> 
        </>
    )
}
export default ShowCase;