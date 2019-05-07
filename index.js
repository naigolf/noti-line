var request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.set('port', (process.env.PORT || 5000)) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})


app.get('/', (req, res) => {
res.end("Ex : server_name/token/msg")
})	


app.get('/:token/:msg', (req, res) => {
 
	
//const msg = "test123456";
//const token = "x9WCqHKRMf6ibDhSadU3bHfqTP7UYwgdNXuJbq0pJBO";

  request({
     method: 'POST',
     uri: 'https://notify-api.line.me/api/notify',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
  },
     'auth': {
       'bearer': req.params.token
  },form: {
       message:  req.params.msg ,
    }
  }, (err,httpResponse,body) => {
     console.log(JSON.stringify(err));
  })





res.end("ok : Line Notify")
})	
