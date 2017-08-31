var assert = require("assert");
var Store = require("../store.js");
var Record = require("../record.js");

describe("Park", function(){

  var store;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    store = new Store("A&B Sound", "Vancouver", 0);
    // how to start with records in inventory array?
    record1 = new Record("Guns n' Roses", "Appetite for Destruction", "Rock", 12);
    record2 = new Record("Beck", "Odelay", "Alternative", 15);
    record3 = new Record("Hot Dreams", "Timber Timbre", "Folk Rock", 10);
  });

  it("inventory count counts 0", function(){
    assert.strictEqual(store.inventoryCount(), 0);
  });

  it("can add record to inventory", function(){
    store.addRecord(record1);
    store.addRecord(record2);
    assert.strictEqual(store.inventoryCount(), 2);
  });
});