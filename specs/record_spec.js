const assert = require('assert');
const Record = require('../record.js');

describe('Record Test', function(){

  let record;

  beforeEach(function(){
    record = new Record("Red Arc/Blue Veils", 'John Luther Adams', 14.99, "Classical");
  })

  it('has a title', function(){
    assert.strictEqual(record.title, 'Red Arc/Blue Veils');
  });

  it('has an artist', function(){
    assert.strictEqual(record.artist, 'John Luther Adams');
  });

  it('has an price', function(){
    assert.strictEqual(record.price, 14.99);
  });

  it('has an genre', function(){
    assert.strictEqual(record.genre, 'Classical');
  });

  it('can print properties', function(){
    assert.strictEqual(record.printProperties(), 'Title: Red Arc/Blue Veils, Artist: John Luther Adams, Genre: Classical, Price: £14.99;');
  })

})
