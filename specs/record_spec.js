var assert = require("assert");
var Record = require("../record.js");
var Store = require("../store.js");

describe("Record", function() {

  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    record1 = new Record("Guns n' Roses", "Appetite for Destruction", "Rock", 12);
    record2 = new Record("Beck", "Odelay", "Alternative", 15);
    record3 = new Record("Timber Timbre", "Hot Dreams", "Folk Rock", 10);
    record4 = new Record("Guns n' Roses", "Use Your Illusions", "Rock", 20);
  })

  it("can print out record properties", function(){
    assert.strictEqual(record2.printDetails(), "Artist: Beck, Title: Odelay, Genre: Alternative, Price: 15");
  });
})