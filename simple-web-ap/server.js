// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, '../public')));

// // Optional: Define API routes
// app.get('/users/get', (req, res) => {
//   res.json({ message: 'Hello from Fargate backend!' });
// });

// // Optional: Define API routes
// app.get('/users/nana', (req, res) => {
//   res.json({ message: 'Hello from Fargate nana!' });
// });


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const path = require('path');
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Define a simple route
app.get('/users/get', (req, res) => {
  res.json({ message: 'Hello from Fargate backend!' });
});



// Optional: Define API routes
app.get('/users/nana', (req, res) => {
  res.json({ message: 'Hello from Fargate nana!' });
});

// Start the server and listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
