const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes - root
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RandomIdeas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
