const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, your backend is listening!');
});

app.listen(port, () => {
  console.log(`App listening at http://64.227.118.75:${port}`)
});
