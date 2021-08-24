const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', function () {
  let decorator;

  beforeEach(function () {
    decorator = new Decorator()
  });

  it('should start with an empty paint stock', function () {
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a can of paint to paint stock', function () {
    const paint_1 = new PaintCan(10)
    decorator.addPaint(paint_1);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to calculate total litres paint it has in stock', function () {
    const paint_1 = new PaintCan(10)
    decorator.addPaint(paint_1);
    const paint_2 = new PaintCan(15)
    decorator.addPaint(paint_2);

    const actual = decorator.calculateLiters();
    assert.strictEqual(actual, 25);
  });

  it('should be able to calculate that it has enough paint to paint a room', function () {
    const room_1 = new Room(20);
    const paint_1 = new PaintCan(10)
    decorator.addPaint(paint_1);
    const paint_2 = new PaintCan(15)
    decorator.addPaint(paint_2);

    const actual = decorator.calculateEnoughPaint(room_1);
    assert.strictEqual(actual, true);
  });

  it('should be able to calcuate that it doesnt have enough paint to paint a room', function () {
    const room_1 = new Room(30);
    const paint_1 = new PaintCan(10)
    decorator.addPaint(paint_1);
    const paint_2 = new PaintCan(15)
    decorator.addPaint(paint_2);

    const actual = decorator.calculateEnoughPaint(room_1);
    assert.strictEqual(actual, false);
  });

  it('should be able to paint room if has enough paint in stock', function () {
    const room_1 = new Room(20);
    const paint_1 = new PaintCan(10)
    decorator.addPaint(paint_1);
    const paint_2 = new PaintCan(15)
    decorator.addPaint(paint_2);
    decorator.calculateEnoughPaint(room_1);

    const actual = room_1.painted;
    assert.strictEqual(actual, true);
  });

  xit('should not paint room if it has not enough paint in stock', function () {
  
  });

  xit('should be able to decrease amount of paint in stock for a given room', function () {
    
  });

  xit('should be able to decrease amount of paint in stock when painting a room', function () {
  });

  xit('should be able to remove empty paint cans from stock', function () {

  });

});
