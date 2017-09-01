var assert = require("assert");
var Customer = require("../customer.js");
var Store = require("../store.js");
var Record = require("../record.js");

describe("Customer", function(){

  var customer1;
  var customer2;
  var store;
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    customer1 = new Customer(30);
    customer2 = new Customer(50);
    store = new Store("A&B Sound", "Vancouver", 0);
    record1 = new Record("Guns n' Roses", "Appetite for Destruction", "Rock", 12);
    record2 = new Record("Beck", "Odelay", "Alternative", 15);
    record3 = new Record("Hot Dreams", "Timber Timbre", "Folk Rock", 10);
    record4 = new Record("Guns n' Roses", "Use Your Illusions", "Rock", 20);
  });

  it("count record collection starts at 0", function(){
    assert.strictEqual(customer1.countCollection(), 0);
  });

  it("buy record", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    customer1.buyRecord(record1, store);
    assert.strictEqual(customer1.countCollection(), 1);
    assert.strictEqual(store.inventoryCount(), 1);
    assert.strictEqual(customer1.cash, 18);
  });

  it("can't buy record if too expensive", function(){
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    customer1.buyRecord(record2, store);
    customer1.buyRecord(record4, store);
    assert.strictEqual(customer1.countCollection(), 1);
    assert.strictEqual(store.inventoryCount(), 2);
    assert.strictEqual(customer1.cash, 15);
  })

  it("can view total value of collection", function(){
    store.addRecord(record3);
    store.addRecord(record4);
    customer2.buyRecord(record3, store);
    customer2.buyRecord(record4, store);
    assert.strictEqual(customer2.collectionValue(), 30);
  })

  it("can return records of genre", function(){
    store.addRecord(record1);
    store.addRecord(record3);
    store.addRecord(record4);
    customer2.buyRecord(record4, store);
    customer2.buyRecord(record3, store);
    customer2.buyRecord(record1, store);
    assert.strictEqual(customer2.recordsOfGivenGenre("Rock")[0], "Artist: Guns n' Roses, Title: Use Your Illusions, Genre: Rock, Price: 20");
  })
});