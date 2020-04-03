const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

const router = express.Router();

const cors = {
  'Access-Control-Allow-Origin': 'http://localhost:9527',
  'Access-Control-Allow-Credentials': true,
  'Access-control-Allow-Methods': 'POst, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Cont' +
    'ent-Type'
};

router.post('/more/server2', (req, res) => {
  res.set(cors);
  res.json(req.cookies)
});

router.options('/more/server2', (req, res) => {
  res.set(cors);
  res.end()
});

app.use(router);

const port = 8088;

module.exports = app.listen(port);
