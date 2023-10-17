const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors middlware
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  })
);

//routes - root
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RandomIdeas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
