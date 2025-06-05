const http = require('http');
const app = require('./app');
// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 80;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
