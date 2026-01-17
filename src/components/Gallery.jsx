import wall from "../assets/dark_laptop.jpg"
import "./Gallery.css"
import bean from "../assets/bean.mp4"

import { useState } from "react"

export default function Gallery()
{
    const name = "MERN"
    const [ count,setCount ] = useState(0)
    return(
        <>
  
        <div>
        <img src="../dark_laptop.jpg"
        alt="Image"
        className="main"
        title="lappy"
        onClick={()=>alert("Hii")}
        />
        <p>Gallerry</p>
        <h1>{name}</h1>
        <button className="text-xl text-blue-500 bg-black" onClick={()=>setCount(count+1)}>Increment+</button>
        <br></br>
        <br></br>
        <button className="text-3xl text-pink-600" onClick={()=>setCount(count-1)}>Decrement-</button>
        <h1>{count}</h1>
        </div>

            <img src={wall}
        alt="second"
        width={500+100}
        height={600}/>
        {/* comment*/}

        {/* video */}
        <video controls width={500} autoPlay muted>
            <source src={bean} type="video/mp4"></source>

        </video>
        <h1 className="text-2xl text-red-500">We have added the attribute muted becuase some browsers will work only 
            when the video is muted to autoPlay the muted is required
        </h1>


        </>
        
        
       
  
   
    //<> and </> A Fragment lets you group multiple elements without adding an extra <div> to the HTML.
      
    )
}