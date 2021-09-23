const request = require('request');

const fetchBreedDescription = function (breed, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
        if (error) {
            callback(error, null);
            return null;
        }
        if (response.statusCode !== 200) {
            callback('Status:' + response.statusCode, null);
            return;
        }
        const data = JSON.parse(body);

        if (data.length === 0) {
            callback('Breed was not found. Please try again');
            return null;
        }
        callback(null, data[0].description.trim());
    });
};

module.exports = { fetchBreedDescription };