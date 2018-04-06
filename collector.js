const _ = require('lodash');

const Collector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
}

Collector.prototype.buy = function (record) {
  this.collection.push(record);
};

Collector.prototype.sell = function (record) {
  _.remove(this.collection, record);
};

module.exports = Collector;
