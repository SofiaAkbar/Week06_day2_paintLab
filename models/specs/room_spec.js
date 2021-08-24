const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {
  let room;

  beforeEach(function () {
    room = new Room(32)
  });

  it('should have an area in square meters', function () {
    const actual = room.area;
    assert.strictEqual(actual, 32);
  });

  it('should start not painted', function () {
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });

  it('should be able to be painted', function () {
    room.paintTheRoom();
    const actual = room.painted;
    assert.strictEqual(actual, true);

  });

});
