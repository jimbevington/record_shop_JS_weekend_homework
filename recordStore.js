const _ = require('lodash');

const RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype.add = function (record) {
  this.inventory.push(record);
};

RecordStore.prototype.listInventory = function () {

  // REFACTOR THIS
  let details = []
  for (let record of this.inventory){
    details.push(record.printProperties());
  }
  return details;
};

RecordStore.prototype.sell = function (record) {
  _.remove(this.inventory, record);
  this.balance += record.price;
};

RecordStore.prototype.viewBooks = function () {
  let roundedBalance = this.balance.toFixed(2);
  let inventoryValue = _.sumBy(this.inventory, 'price');
  inventoryValue = inventoryValue.toFixed(2);
  return `Balance: £${roundedBalance}, Inventory Value: £${inventoryValue}`;
};

RecordStore.prototype.listBy = function (value) {
  let list = _.filter(this.inventory, {'genre': value})
  return list.map(record => record.printProperties());
};

module.exports = RecordStore;
