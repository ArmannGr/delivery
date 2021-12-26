import StarRating from "../../common/StarRating";
import React from "react";

export function RateRestaurant(props) {
    return <div id="ratings-and-reviews"
                className="bg-white rounded shadow-sm p-4 mb-4 clearfix restaurant-detailed-star-rating">
        <div className="star-rating float-right">
            <StarRating fontSize={26} star={5}
                        getValue={props.value}/>
        </div>
        <h5 className="mb-0 pt-1">Rate this Place</h5>
    </div>;
}