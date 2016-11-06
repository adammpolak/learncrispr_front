var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 4000;

app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){
  res.render('index');
});

app.listen(port, function(){
  console.log('app listening on port: '+port);
});
