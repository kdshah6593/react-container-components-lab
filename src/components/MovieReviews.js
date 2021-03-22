// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => 
    <div className="review-list">
        {props.reviews.map(review => <div className="review">{review.headline}</div>)}
    </div>;

export default MovieReviews;