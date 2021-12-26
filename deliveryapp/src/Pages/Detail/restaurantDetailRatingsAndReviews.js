import StarRating from "../../common/StarRating";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Review from "../../common/Review";
import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import {RatingsGraph} from "./ratingsGraph";
import {RateRestaurant} from "./rateRestaurant";
import {collection, db, getDocs} from "../../firebase";
import {reviewConverter} from "./reviewModel";

RatingsGraph.propTypes = {value: PropTypes.any};

RateRestaurant.propTypes = {value: PropTypes.any};
export default function RestaurantDetailRatingsAndReviews(props) {

    useEffect(() => {
        getReviewsForID();
    }, []);
    const [reviews, setReviews] = useState([]);

    async function  getReviewsForID()  {
        console.log('getting reviews for restaurant with following ID '+props.restaurantID);
        const id = props.restaurantID;
        const querySnapshots = await getDocs(collection(db,`restaurants/${id}/reviews`).withConverter(reviewConverter));
        setReviews(querySnapshots.docs.map(doc => doc.data()));
    }


    return <>
        <RateRestaurant value={3.5}/>

        <RatingsGraph value={3.5}/>

        <div
            className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
            <Link to="#" className="btn btn-outline-primary btn-sm float-right">Top
                Rated</Link>
            <h5 className="mb-1">All Ratings and Reviews</h5>

            {/*show reviews*/}
            {reviews && reviews.map( review =>
                <>
                    <Review review={review}/>
                    <hr className="clearfix"/>
                </>

            )}


            <Link className="text-center w-100 d-block mt-4 font-weight-bold"
                  to="#">See All Reviews</Link>
        </div>
        <div
            className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
            <h5 className="mb-4">Leave Comment</h5>
            <p className="mb-2">Rate the Place</p>
            <div className="mb-4">
                <div className="star-rating">
                    <StarRating fontSize={26} star={5}
                                getValue={props.value}/>
                </div>
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>Your Comment</Form.Label>
                    <Form.Control as="textarea"/>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" size="sm" type="button"> Submit
                        Comment </Button>
                </Form.Group>
            </Form>
        </div>
    </>;
}