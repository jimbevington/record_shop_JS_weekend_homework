const assert = require('assert');
const Collector = require('../collector.js');
const Record = require('../record.js');

describe('Collector test', function(){

  let collector1;
  let collector2;
  let record1;
  let record2;
  let record3;

  beforeEach(function(){
    collector1 = new Collector('Grayson', 20.00);
    collector2 = new Collector('Grunhilda', 15.00);
    record1 = new Record('Chamber Music', 'Iannis Xenakis', 12.99, 'Classical');
    record2 = new Record('Returnal', 'Oneohtrix Point Never', 9.99, 'Electronic');
    record3 = new Record('Elite Excel', 'Stellar Om Source', 25.88, 'Electronic');
  })

  it('can buy records', function(){
    assert.deepStrictEqual(collector1.collection, []);
    collector1.buy(record1);
    assert.deepStrictEqual(collector1.collection, [record1]);
  });

  it('can sell records', function(){
    collector1.buy(record1);
    collector1.sell(record1);
    assert.deepStrictEqual(collector1.collection, []);
  });

  it('buying decreases cash', function(){
    collector1.buy(record1);
    assert.strictEqual(collector1.cash, 7.01);
  });

  it('selling increases cash');

  it('can\'t buy records that are too expensive');

  it('can view collection value');

  it('can view value by Genre');

  it('can view valueS by Genre');

  it('can print collection');

  it('can sort records by Value - ascending');

  it('can sort records by Value - descending');

  it('can compare values with another collector');

})
