import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]); // Separate state for filtered reviews
    const [ratingFilter, setRatingFilter] = useState('');
    const [sortOrder, setSortOrder] = useState(''); // 'asc' or 'desc'

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then((response) => {
                setReviews(response.data);
                setFilteredReviews(response.data); // Initialize filtered list
            })
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    // Handle Filtering by Rating
    const handleFilterByRating = (rating) => {
        setRatingFilter(rating);
        if (rating) {
            setFilteredReviews(reviews.filter(review => review.rating === Number(rating)));
        } else {
            setFilteredReviews(reviews); // Reset to all reviews if no filter
        }
    };

    // Handle Sorting by Date
    const handleSortByDate = (order) => {
        setSortOrder(order);
        const sortedReviews = [...filteredReviews].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        });
        setFilteredReviews(sortedReviews);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 my-8 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Book Reviews</h2>

            {/* Filter and Sort Options */}
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <label htmlFor="ratingFilter" className="mr-2 text-gray-700 font-medium">
                        Filter by Rating:
                    </label>
                    <select
                        id="ratingFilter"
                        value={ratingFilter}
                        onChange={(e) => handleFilterByRating(e.target.value)}
                        className="border border-gray-300 rounded p-2"
                    >
                        <option value="">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sortOrder" className="mr-2 text-gray-700 font-medium">
                        Sort by Date:
                    </label>
                    <select
                        id="sortOrder"
                        value={sortOrder}
                        onChange={(e) => handleSortByDate(e.target.value)}
                        className="border border-gray-300 rounded p-2"
                    >
                        <option value="">None</option>
                        <option value="asc">Oldest to Newest</option>
                        <option value="desc">Newest to Oldest</option>
                    </select>
                </div>
            </div>

            {/* List Reviews */}
            {filteredReviews.length > 0 ? (
                <ul className="space-y-6">
                    {filteredReviews.map((review) => (
                        <li
                            key={review.id}
                            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200"
                        >
                            <h3 className="text-xl font-bold text-blue-600">{review.title}</h3>
                            <p className="text-gray-700 font-medium">by {review.author}</p>
                            <p className="mt-2 text-yellow-500 font-semibold">Rating: {review.rating}</p>
                            <p className="mt-3 text-gray-600">{review.review_text}</p>
                            <p className="text-gray-500">Date: {review.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No reviews available yet.</p>
            )}
        </div>
    );
};

export default ReviewList;
