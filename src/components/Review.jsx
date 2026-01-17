import { useState } from 'react';
import './Review.css';

export default function Review()
{

    const [movie,setMovie] = useState("");
    const [review,setReview] = useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
         
        const reviewData = {
            movieName : movie,
            reviewText : review

        };
        console.log(reviewData);
    };



    return(
        <div className="review-container">

            <h1>Write the Review</h1>
            
            <form className='form' onSubmit={handleSubmit}>
                <select
                value={movie}
                onChange={(e)=>setMovie(e.target.value)}
                required>
                    <option value="">Select a movie</option>
                    <option value="Harry Potter">Harry Potter</option>
                    <option value="Sea beast">Sea Beast</option>
                    <option value="Legally Blonde">Legally Blonde</option>

                </select>
                <br></br>

                <textarea placeholder="Write Your Review" 
                value={review}
                onChange={(e)=>setReview(e.target.value)}
                required rows={5} cols={5}/>

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}