const assert = require('assert');
const PaintCan = require('../paint_can');

describe('Paint Can', function () {
  let paintCan;

  beforeEach(function () {
    paintCan = new PaintCan(10)
  });

  it('should have a number of litres of paint', function () {
    const actual = paintCan.liters;
    assert.strictEqual(actual, 10);
  });

  it('should not start empty', function () {
    const actual = paintCan.empty;
    assert.strictEqual(actual, false)
  });

  it('should be able to empty itself', function () {
    paintCan.emptyCan();
    const actual = paintCan.empty;
    assert.strictEqual(actual, true)
  });
});
