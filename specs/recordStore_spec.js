const assert = require('assert');
const RecordStore = require('../recordStore.js');
const Record = require('../record.js');

describe('Record Store test', function(){

  let store;
  let record1;
  let record2;

  beforeEach(function(){
    store = new RecordStore('Vibrant Matter', 'Glasgow');
    record1 = new Record('Plays', 'Ekkelhard Ehlers', 10.50, 'Electronic');
    record2 = new Record('Big Fish Theory', 'Vince Staples', 12.49, 'Hip-Hop');
    record3 = new Record('Moms', 'Carl Stone', 8.99, 'Electronic');
  })

  it('has a name', function(){
    assert.strictEqual(store.name, 'Vibrant Matter');
  });

  it('has a city', function(){
    assert.strictEqual(store.city, 'Glasgow');
  });

  it('has a balance', function(){
    assert.strictEqual(store.balance, 0.00);
  });

  it('has an inventory', function(){
    assert.deepStrictEqual(store.inventory, []);
  });

  it('can add records', function(){
    store.add(record1);
    assert.deepStrictEqual(store.inventory, [record1]);
  });

  it('can list inventory', function(){
    store.add(record1);
    store.add(record2);
    assert.deepStrictEqual(store.listInventory(), [record1.printProperties(), record2.printProperties()]);
  })

  it('can sell a record and increase shop balance', function(){
    store.add(record1);
    store.sell(record1);
    assert.strictEqual(store.balance, 10.50);
    assert.deepStrictEqual(store.inventory, []);
  })

  it('print the books', function(){
    assert.strictEqual(store.viewBooks(), 'Balance: £0.00, Inventory Value: £0.00');
    store.add(record1);
    store.add(record2);
    assert.strictEqual(store.viewBooks(), 'Balance: £0.00, Inventory Value: £22.99');
    store.sell(record2);
    assert.strictEqual(store.viewBooks(), 'Balance: £12.49, Inventory Value: £10.50')
  })

  it('print records of a genre', function(){
    store.add(record1);
    store.add(record2);
    store.add(record3);
    assert.deepStrictEqual(store.listByGenre('Electronic'), [record1.printProperties(), record3.printProperties()])
  })

})
