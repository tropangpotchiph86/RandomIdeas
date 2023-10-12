const express = require('express');
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TeamCharat',
    date: '2023-05-01',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'Master JM',
    date: '2023-06-07',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'Atticus',
    date: '2023-07-09',
  },
];

//Get All Ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

//Get a single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: idea });
});

module.exports = router;
