const request = require('request');
let userCat = process.argv.slice(2);

request(' https://api.thecatapi.com/v1/breeds/search?q=' + userCat, function(error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  console.log(data[0].name);

});