import React from "react";
import data from "../data";
import { useState } from "react";

const Projects =() =>{
    //eslint-disable-next-line
    const [items, setItems] = useState(data)
    return(
        <>
            <section className="py-20 px-5 bg-green-800 
            grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32">
            {items.map((item)=>{
                const {id, path, description} = item
                return(
                    <div key={id}>
                        <img src ={path} alt={description} className="p-5 bg-green-500 rounded" />
                        <small className="block text-center text-white font-semibold text-lg">{description}</small>
                        <a href="http://www.edgedev.ivyarc.com" className="text-white font-semibold 
                        block text-center hover:bg-green-400 ">click to view</a>
                        <a href="http://www.iqstore.ivyarc.com" className="text-white font-semibold 
                         block text-center hover:bg-green-400">click to view</a>
                    </div>
                )
            })}
            </section>  
        </>
    )
}
export default Projects;