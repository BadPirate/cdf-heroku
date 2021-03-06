var Promise = require('es6-promise').Promise;
var express = require('express');
var router = express.Router();
var finder = require('congressional-district-finder');

function districtResponse(res, result) {
  console.log(result)
  res.status(200).json({"id" : result.districtId, "name" : result.district.name })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('https://github.com/BadPirate/cdf-heroku/blob/master/README.md')
});

router.get('/api/coordinate/:latitude/:longitude', function(req, res) {
  var lat = req.params.latitude
  var lng = req.params.longitude
  console.log("Request sent for lat: "+lat+" lng: "+lng)
  finder.getDistrictByLatLng(lat, lng)
      .then(function(result) {
          districtResponse(res,result)
      })
      .catch(function(err) {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;