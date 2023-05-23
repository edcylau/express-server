const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express();

const port = 12345;
app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// GET request handler
app.get('/', (req, res) => {
    console.log('req',req.body)
  res.send('This is a GET request.');
});

// POST request handler
app.post('/', (req, res) => {
    console.log('req',req.body);
  res.send({"success":`This is a POST request, data: ${req.body["url"]}`});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
