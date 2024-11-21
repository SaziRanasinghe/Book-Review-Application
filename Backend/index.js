const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewRoutes = require('./routes/reviews'); // Correct import

const app = express();
app.use(cors());
app.use(express.json()); // Important: Enables parsing JSON in POST requests

// Use the correct variable name here
app.use('/reviews', reviewRoutes);



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
