var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+'/../client/dist'));

app.get('/', (req, res) => {
  res.send('hello!');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});