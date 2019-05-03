const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const calculate = require('./calculate.js')
const getGeocode = require('./getGeocode.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ from : 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log("from server", req.body);
  //var data = req.body.post;
  
  citya = req.body['cityA'];
  cityb = req.body['cityB']

  first_geocode = getGeocode(citya);
  //second_geocode = getGeocode(cityb);

  console.log("first geo code ", first_geocode);
  //console.log("second geo code ", second_geocode);

  var calculateDistance = calculate([42.741,-71.3161], [42.806911, -71.290611], true).toFixed(3)
  //var final_data = data.replace(' ', '-');
  res.send(
    `Distance : ${calculateDistance}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));