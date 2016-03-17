
var Backbone = require('backbone');
var $ = require('jquery');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterCollectionView');



$(document).ready(function () {
var bittCol = new BitterCollection();
bittCol.fetch().then(function(data){
var collection = new BitterCollection(data);
new BitterCollectionView({collection: collection});

})

});
