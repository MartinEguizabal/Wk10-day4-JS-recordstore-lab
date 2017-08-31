var assert = require("assert");
var Store = require("../store.js");
var Record = require("../record.js");

describe("Park", function(){

  var store1;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    store1 = new Store("A&B Sound", "Vancouver", 0);
    // how to start with records in inventory array?
    record1 = new Record("Guns n' Roses", "Appetite for Destruction", "Rock", 12);
    record2 = new Record("Beck", "Odelay", "Alternative", 15);
    record3 = new Record("Hot Dreams", "Timber Timbre", "Folk Rock", 10);
  });
});