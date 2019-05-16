
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const request = require('request');
const app = express();
const defaultLatLon = '37.8267,-122.4233'
var d=[];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);
   const key = '0162c85e8590d76a607f04d694ffa0c1/'

    //ROUTING STUFF
    app.get('/', (req,res)=>res.send('fuuuuuck'))

    app.get('/api/weather', (req, res) => {
      res.header("Access-Control-Allow-Origin", "*")
      const coords = req.query.location || defaultLatLon;
      let options = {
        url: 'https://api.darksky.net/forecast/'+key+coords,
        header: ("Access-Control-Allow-Origin", "*")
        
      };

   request(options, responseHandler);
   res.send(d);
  })

  
    
  

  async function responseHandler(error, response, body) {
    if (response.statusCode === 200 || response.statusCode === 304) {
      var data= await JSON.parse(body)
      d = await JSON.stringify(data,null,2)
      console.log(d)
      if(error) return console.log(error)
  
      console.log("Darksky Response: " +response.statusCode)
    };
}
app.listen(3001, () =>
console.log('Express server is running on localhost:3001')
);