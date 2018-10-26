const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Home = require('./dataGen.js').home;

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/', express.static(path.join('././client/dist')));

app.get('/home/:homeId', (req, res) => {
  Home.findAll({
    where: {
      id: req.param('homeId')
    }
  }).then(homes => {
    res.send(homes);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
