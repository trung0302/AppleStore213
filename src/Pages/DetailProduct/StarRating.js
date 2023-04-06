import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import classes from "./StarRating.module.css" 
const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (<div className="flex justify-center">
        {
            [...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return  <label>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue} 
                                onClick={() => setRating(ratingValue)}
                                className="hidden"/>
                            <FaStar 
                                className={classes.star} 
                                color={ratingValue <= (hover || rating)  ? "ffc107" : "#e4e5e9"} 
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave={()=>setHover(null)}
                                size={20}/>
                    </label>
            })
        }
            
        </div>);
}

export default StarRating;