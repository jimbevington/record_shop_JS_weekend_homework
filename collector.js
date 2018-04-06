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

module.exports = Collector;
