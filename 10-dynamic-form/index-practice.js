const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('dynamic');
});

app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/axios', (req, res) => {
  // console.log(req.query);
  res.send(req.query);
});

app.post('/axios', (req, res) => {
  res.send(req.body);
});

app.get('/fetch', (req, res) => {
  res.json(req.query);
});

app.post('/fetch', (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!`);
});
