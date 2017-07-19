'use strict';

var express = require('express');
var app     = express();

app.use(express.static(__dirname));
app.listen(8081, function () {
  console.log('Server listening on port', 8081);
});
