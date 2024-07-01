// index.js
const express = require('express');
const app = express();
const port = 8080;

app.get('/hello', (req, res) => {
  res.send({
    message: 'Hello, World!'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
