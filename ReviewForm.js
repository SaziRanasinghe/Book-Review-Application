import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewForm = ({ currentReview, onSave, onCancel }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [date, setDate] = useState('');

    // Populate the form fields if editing a review
    useEffect(() => {
        if (currentReview) {
            setTitle(currentReview.title);
            setAuthor(currentReview.author);
            setRating(currentReview.rating);
            setReviewText(currentReview.review_text);
            setDate(currentReview.date || ''); // Set date if available
        } else {
            // Clear form if no currentReview (adding mode)
            setTitle('');
            setAuthor('');
            setRating('');
            setReviewText('');
            setDate('');
        }
    }, [currentReview]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = { title, author, rating, review_text: reviewText, date };

        try {
            if (currentReview) {
                // Edit existing review
                const response = await axios.put(`http://localhost:5000/reviews/${currentReview.id}`, reviewData);
                console.log('Edit Response:', response.data);
            } else {
                // Add new review
                const response = await axios.post('http://localhost:5000/reviews', reviewData);
                console.log('Add Response:', response.data);
            }
            onSave(); // Refresh the list or close the form
        } catch (error) {
            console.error('Error saving review:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{currentReview ? 'Edit Review' : 'Add Review'}</h2>

            <div className="mb-4">
                <label className="block text-gray-700">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Author:</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Rating:</label>
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="5"
                    step="0.1"
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Review Text:</label>
                <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
            </div>

            <div className="flex space-x-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    {currentReview ? 'Update' : 'Add'} Review
                </button>
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default ReviewForm;
