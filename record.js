const Record = function(title, artist, price, genre){
  this.title = title;
  this.artist = artist;
  this.price = price;
  this.genre = genre;
}

Record.prototype.printProperties = function () {
  return `Title: ${this.title}, Artist: ${this.artist}, Genre: ${this.genre}, Price: £${this.price};`; 
};

module.exports = Record;
