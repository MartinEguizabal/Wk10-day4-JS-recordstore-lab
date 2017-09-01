var assert = require("assert");
var Store = require("../store.js");
var Record = require("../record.js");

describe("Store", function(){

  var store;
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    store = new Store("A&B Sound", "Vancouver", 0);
    // how to start with records in inventory array?
    record1 = new Record("Guns n' Roses", "Appetite for Destruction", "Rock", 12);
    record2 = new Record("Beck", "Odelay", "Alternative", 15);
    record3 = new Record("Timber Timbre", "Hot Dreams", "Folk Rock", 10);
    record4 = new Record("Guns n' Roses", "Use Your Illusions", "Rock", 20);
  });

  it("inventory count counts 0", function(){
    assert.strictEqual(store.inventoryCount(), 0);
  });

  it("can add record to inventory", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    assert.strictEqual(store.inventoryCount(), 2);
  });

  it("can list inventory", function(){
    store.addRecord(record3);
    store.addRecord(record1);
    assert.strictEqual(store.listInventory()[0], "Artist: Timber Timbre, Title: Hot Dreams, Genre: Folk Rock, Price: 10");
  });

  it("can sell record", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.sellRecord(record1);
    assert.strictEqual(store.inventoryCount(), 1);
    assert.strictEqual(store.balance, 12);
  })

  it("can get stock value", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.sellRecord(record1);
    assert.strictEqual(store.stockValue(), 25);
  });

  it("can return price", function(){
    store.addRecord(record1);
    assert.equal(store.getPrice(), 12);
  });

  it("can return financial summary", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.sellRecord(record2);
    assert.strictEqual(store.financialSummary(), 27);
  })

  it("can return records of genre", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record4);
    assert.strictEqual(store.recordsOfGivenGenre("Rock")[0], "Artist: Guns n' Roses, Title: Appetite for Destruction, Genre: Rock, Price: 12");
  })
});