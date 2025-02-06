import React, { useState } from "react";
import './Business.css';

function Business({ business }) {
    const {
        imageSrc,
        name,
        address,
        city,
        state,
        zipcode,
        category,
        rating,
        reviewCount,
    } = business;

    const [reviews, setReviews] = useState([]); // Array to hold reviews
    const [review, setReview] = useState(''); // Current review input
    const [starRating, setStarRating] = useState(0); // Current star rating
    const [showReviewInput, setShowReviewInput] = useState(false); // Control visibility of review input
    const [submittedReviewIds, setSubmittedReviewIds] = useState([]); // Track submitted reviews

    const submitReview = () => {
        if (review && !submittedReviewIds.includes(review)) {
            const newReview = { rating: starRating, text: review };
            setReviews([...reviews, newReview]); // Add new review to the array
            setSubmittedReviewIds([...submittedReviewIds, review]); // Track this review as submitted
            setReview(''); // Clear input
            setStarRating(0); // Reset star rating
            setShowReviewInput(false); // Hide review input
        }
    };

    return (
        <div className={`business-card ${business.className}`}>
            <img 
                className="business-img"
                src={imageSrc}
                alt={`Image for ${name}`}
            />
            <div className="business-info">
                <h2 className="business-name">{name}</h2>
                <p className="business-address">{address}, {city}, {state} {zipcode}</p>
                <p className="business-category">Category: {category}</p>
                <div className="business-rating-review">
                    <p className="business-rating">Rating: {rating}</p>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map(star => (
                            <span 
                                key={star}
                                className={`star ${starRating >= star ? 'filled' : ''}`}
                                onClick={() => {
                                    setStarRating(star);
                                    setShowReviewInput(true); // Show review input when stars are clicked
                                }}
                                onMouseEnter={() => setStarRating(star)}
                                onMouseLeave={() => setStarRating(0)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    {showReviewInput && (
                        <div className="business-review-input">
                            <label htmlFor="review-input">Write a review:</label>
                            <input 
                                id="review-input" 
                                type="text" 
                                placeholder="Write your review here" 
                                onChange={(e) => setReview(e.target.value)} 
                                value={review} 
                            />
                            <button id="review-submit-button" onClick={submitReview}>Submit</button>
                        </div>
                    )}
                    <div className="reviews-list">
                        {reviews.length > 0 ? (
                            reviews.map((rev, index) => (
                                <div key={index}>
                                    <p>Rating: {rev.rating} ★</p>
                                    <p>{rev.text}</p>
                                </div>
                            ))
                        ) : (
                          <div>
                            <p>No reviews yet.</p>
                            <p>Your rating:</p>
                            <p style={{color: '#f39c12'}}>{starRating} ★</p>
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;