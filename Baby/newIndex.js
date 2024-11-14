
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Request Date Logger:', new Date()); // Log the request method and URL
    next(); // Pass control to the next middleware or route handler
});


// Set up a basic route for the root directory
app.get('/', (req, res) => {
  res.send('Hello World,cynthia greets you very well');
});
app.get('/user/:username', (req, res) => {
    res.json({ Userinfo: req.params.username });
});

// Set the port for the server to listen on
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});