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
        title="lappy"
        onClick={()=>alert("Hii")}
        />
        <p>Gallerry</p>
        </div>
        
            <img src={wall}
        alt="second"
        width={500+100}
        height={600}/>
        {/* comment*/}
        </>
        
        
       
  
   
    //<> and </> A Fragment lets you group multiple elements without adding an extra <div> to the HTML.
      
    )
}