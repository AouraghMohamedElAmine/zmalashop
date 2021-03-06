import React from "react";
 

function Rating(props) {

  return (
    <>
      <span>
        <i style={{color: "gold"}} className={
            props.rating >= 1 ?
            "fas fa-star" 
            : props.rating >= 0.5 ?
            "fas fa-star-half-alt" :
            "far fa-star"
            
        }> 
        </i>
      </span>
      <span>
        <i style={{color: "gold"}} className={
            props.rating >= 2 ?
            "fas fa-star" 
            : props.rating >= 1.5 ?
            "fas fa-star-half-alt" :
            "far fa-star"
        }> 
        </i>
      </span>
      <span>
        <i style={{color: "gold"}} className={
            props.rating >= 3 ?
            "fas fa-star" 
            : props.rating >= 2.5 ?
            "fas fa-star-half-alt" :
            "far fa-star"
        }> 
        </i>
      </span>
      <span>
        <i style={{color: "gold"}} className={
            props.rating >= 4 ?
            "fas fa-star" 
            : props.rating >= 3.5 ?
            "fas fa-star-half-alt" :
            "far fa-star"
        }> 
        </i>
      </span>
      <span>
        <i style={{color: "gold"}} className={
            props.rating >= 5 ?
            "fas fa-star" 
            : props.rating >= 4.5 ?
            "fas fa-star-half-alt" :
            "far fa-star"
        }> 
        </i>

      </span>
      <span className="ml-1"><p className="reviews-text">{props.numReviews} reviews</p> </span> 
    </>
  );
}

export default Rating;
