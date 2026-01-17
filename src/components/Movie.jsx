import Harry from "../assets/Harry.jpg";
import "./Movie.css";
import red from "../assets/red.png";
import legally from "../assets/Legally.png";
import { useNavigate } from "react-router-dom";

export default function Movie()
{
    const navigate = useNavigate();
    return(
        <>
        <h1>Movies</h1>
        <div className="image-row">
        <img src={Harry}
        alt="Harry Potter and the Philosopher stone"
        width={300}
        height={100}/>
         <img src={red}
        alt="sea beast"
        width={300}
        height={100}/>
        <img src={legally}
        alt="Legally blonde"
        width={300}
        height={100}/>

        </div>
    


        <button onClick={()=>navigate("/Review")}>Review</button>
        </>
    )
}