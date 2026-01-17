import { useNavigate } from "react-router-dom"
import "./Home.css"


export default function Home()
{

     const navigate = useNavigate();
    return(
    
        <>

        <div className="home">

        <button onClick={()=>navigate("/movies")}>Movies</button>
        <br></br>
        <br></br>
        <button onClick={()=>navigate("/restaurant")}>Restaurant</button>
        </div>
        
        
        </>
    )
        
    
    
}