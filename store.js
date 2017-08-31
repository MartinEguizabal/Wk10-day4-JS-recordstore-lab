var Store = function(store, city, balance) {
  this.store = store;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

  Store.prototype.inventoryCount = function(){
    return this.inventory.length;
  };

  Store.prototype.addRecord = function(record){
    this.inventory.push(record);
  };

module.exports = Store;