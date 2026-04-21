require('dotenv').config();
const app = require('./app');
const mbd = require('./modules/db');

const PORT = process.env.PORT || 5000;

mbd().catch((err) => console.log("MongoDB connection warning:", err.message));

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/test`);
  console.log(`Users endpoint: http://localhost:${PORT}/users`);
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use! Close other Node processes.`);
  }
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
