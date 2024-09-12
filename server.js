// Load environment variables
require('dotenv').config();

// Description: Main entry point for the application.
const http = require('http');
const app = require('./app/app');

// Connect to database
require("./config/dbConnect");

// Set port
const port = process.env.PORT || 3000;

// Create server
const server = http.createServer(app);

// Set port to listen
server.listen(port, console.log(`System is running on port ${port}`));