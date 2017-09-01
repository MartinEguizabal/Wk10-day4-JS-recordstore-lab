var Store = function(store, city, balance) {
  this.store = store;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
  // console.log(this.inventory)

}

  Store.prototype.inventoryCount = function(){
    return this.inventory.length;
  };

  Store.prototype.addRecord = function(record){
    this.inventory.push(record);
  };

  Store.prototype.printProperties = function(){
    console.log(this.inventory);
  }.bind(this.inventory);

  Store.prototype.listInventory = function(){
    var inventory = this.inventory.map(function(item){
      return item.printDetails();
    });
    return inventory;
  };

  Store.prototype.sellRecord = function(record){
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index, 1);
    this.balance += record.price;
  };

  Store.prototype.stockValue = function(){
    var total = 0;
    this.inventory.forEach(function(record){
      total += record.price;
    });
    return total;
  }

  Store.prototype.getPrice = function(){
    return this.inventory[0].price;
  };

  Store.prototype.financialSummary = function(){
    return this.stockValue() + this.balance;
  };

  // Store.prototype.recordsOfGivenGenre = function(genre){
  //   var recordsOfGenre = this.inventory.filter(function(item){
  //     if(item.genre === genre){
  //       return item; 
  //       };
  //     });
  //     return recordsOfGenre;
  //   };

  Store.prototype.recordsOfGivenGenre = function(genre){
   var recordsOfGenre = this.inventory.map(function(item){
     if(item.genre === genre){
       return item.printDetails();
        }
      });
     return recordsOfGenre;
   };

module.exports = Store;