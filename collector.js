const _ = require('lodash');

const Collector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
}

Collector.prototype.buy = function (record) {
  if (record.price <= this.cash) {
    this.collection.push(record);
    this.cash -= record.price;
  }
};

Collector.prototype.sell = function (record) {
  _.remove(this.collection, record);
  this.cash += record.price;
};

Collector.prototype.collectionValue = function () {
  return _.sumBy(this.collection, 'price');
};

Collector.prototype.valueByGenre = function (genre) {
  let genreList = _.filter(this.collection, {'genre': genre});
  return _.sumBy(genreList, 'price');
};

module.exports = Collector;
