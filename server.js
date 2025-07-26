const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // serve index.html and script.js

// Example route
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // pretend to save to database
  console.log('Saving user:', { username, email, password });
  return res.status(201).json({ message: 'User registered successfully' });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
