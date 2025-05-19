const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Handle root route to serve index.html explicitly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Example API route
app.get('/users/get', (req, res) => {
  res.json({ message: 'Hello from Fargate backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
