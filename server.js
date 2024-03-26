const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const User = require('./app/models/User');

const mongoose = require('mongoose');
const {data} = require('autoprefixer');
const {log} = require('console');

const MONGODB_URI =
    'mongodb+srv://hpmahimkar:y0l0C4Hmqvq5w8nq@cluster0.uf3ieq3.mongodb.net/USERS';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser : true,
      useUnifiedTopology : true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

app.prepare().then(() => {
  const server = express();

  // Define custom routes or middleware if needed
  server.get('/getdummy', async (req, res) => {
    try {
      const data = await User.find({name : "Hem"});
      console.log(data, "data");
    } catch (error) {
      console.log("error:", error);
    }
  });

  // Default route handler
  server.all('*', (req, res) => { return "hello world"; });

  // Start the server
  server.listen(5000, (err) => {
    if (err)
      throw err;
    console.log('> Ready on http://localhost:5000');
    connectDB();
  });
});
