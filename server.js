const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    count = require('./server/routes/count')

let app = express()
require('dotenv').load();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser.json())
app.use('/api/count', count)

app.use(express.static(path.join(__dirname, './dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'))
});

const port =  process.env.PORT || 3000;
app.listen(port, () => console.log('Running on localhost:', port))
