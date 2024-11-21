const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all reviews
router.get('/', (req, res) => {
    db.query('SELECT * FROM reviews', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Get a review by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM reviews WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
});

// Add a new review
router.post('/', (req, res) => {
    const { title, author, rating, review_text, date } = req.body;
    const query = 'INSERT INTO reviews (title, author, rating, review_text, date) VALUES (?, ?, ?, ?)';
    db.query(query, [title, author, rating, review_text], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to add review' });
        } else {
            res.status(201).json({ message: 'Review added successfully', id: result.insertId });
        }
    });
});

// Update a review
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, rating, review_text } = req.body;
    const query = 'UPDATE reviews SET title = ?, author = ?, rating = ?, review_text = ? WHERE id = ?';
    db.query(query, [title, author, rating, review_text, id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Review updated' });
    });
});

// Delete a review
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM reviews WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Review deleted' });
    });
});

module.exports = router;
