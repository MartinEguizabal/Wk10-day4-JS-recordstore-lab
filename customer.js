var Customer = function(cash){
  this.cash = cash;
  this.collection = [];
};

Customer.prototype.countCollection = function(){
  return this.collection.length;
};

Customer.prototype.buyRecord = function(record, store){
  if(this.cash >= record.price){
    store.sellRecord(record);
    this.collection.push(record);
    this.cash -= record.price;
  };
};

Customer.prototype.collectionValue = function(){
  var totalValue = 0;
  this.collection.forEach(function(record){
    totalValue += record.price;
  });
  return totalValue;
};

Customer.prototype.recordsOfGivenGenre = function(genre){
  var recordsOfGenre = this.collection.map(function(item){
    if(item.genre === genre){
      return item.printDetails();
    };
  });
  return recordsOfGenre;
};
module.exports = Customer;