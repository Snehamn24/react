import wall from "../assets/dark_laptop.jpg"
import "./Gallery.css"
export default function Gallery()
{
    return(
        <>
  
        <div>
        <img src="../dark_laptop.jpg"
        alt="Image"
        className="main"
        />
        <p>Gallerry</p>
        </div>
        <div>
            <img src={wall}
        alt="second"
        width={500}
        height={1000}/>
        </div>
        
    </>
        
    )
}