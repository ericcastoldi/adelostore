var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');

  next();
});

app.get('*', function (request, response) {
  var indexHtml = path.resolve(__dirname, 'public', 'index.html');
  response.sendFile(indexHtml);
});


// app.get('/api/setlist', setlist.all);
// app.post('/api/setlist', setlist.update);
// app.post('/api/filterSetlist', setlist.byTags);


app.listen(app.get('port'), function () {
  console.log('Server up and running! http://localhost:' + app.get('port') + '/');
});
