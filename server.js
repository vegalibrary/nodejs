const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
