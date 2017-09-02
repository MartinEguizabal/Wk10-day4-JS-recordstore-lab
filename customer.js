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

Customer.prototype.sortByValue = function(){
  var recordsByValue = this.collection.sort(function(a, b){
    return (b.price - a.price);
  });
  // var markeString = recordsByValue.forEach(function(record){
  //   return record.printDetails();
  // });
  // console.log(recordsByValue);
  return recordsByValue;
};

Customer.prototype.compareValue = function(other_customer){
  return "First Customer Collection value: " + this.collectionValue() + ". " + "Second Customer Collection value: " + other_customer.collectionValue() + ".";
}

module.exports = Customer;




// how to test without having to make each item in the array a string?