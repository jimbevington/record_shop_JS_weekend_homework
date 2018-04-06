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
    collector1 = new Collector('Grayson', 23.00);
    collector2 = new Collector('Grunhilda', 100.00);
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
    assert.strictEqual(collector1.cash, 10.01);
  });

  it('selling increases cash', function(){
    collector1.buy(record1);
    collector1.sell(record1);
    assert.strictEqual(collector1.cash, 23);
  });

  it('can\'t buy records that are too expensive', function(){
    collector1.buy(record3);
    assert.deepStrictEqual(collector1.collection, []);
  });

  it('can view collection value', function(){
    assert.strictEqual(collector1.collectionValue(), 0);
    collector1.buy(record1);
    collector1.buy(record2);
    assert.strictEqual(collector1.collectionValue(), 22.98);
  });

  it('can view value by Genre', function(){
    // no Electronic records yet
    assert.strictEqual(collector2.valueByGenre('Electronic'), 0)
    collector2.buy(record1);
    // still no Electronic records
    assert.strictEqual(collector2.valueByGenre('Electronic'), 0)
    collector2.buy(record2);
    collector2.buy(record3);
    // now 2 Electronic records
    assert.strictEqual(collector2.valueByGenre('Electronic'), 35.87);
  });

// DO THIS
  it('can view valueS by Genre');

  it('can print collection', function(){
    collector1.buy(record1);
    collector1.buy(record2);
    assert.deepStrictEqual(collector1.listCollection(), [record1.printProperties(), record2.printProperties()]);
  });

  it('can sort records by Value - ascending');

  it('can sort records by Value - descending');

  it('can compare values with another collector');

})
