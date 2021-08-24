// Decorator Constructor and prototypes here
const Decorator = function () {
    this.stock = [];
}

Decorator.prototype.addPaint = function (paint) {
    this.stock.push(paint);
}

Decorator.prototype.calculateLiters = function () {
    let value = 0;
    for (paint of this.stock) {
        value += paint.liters;
    }
    return value;
}

Decorator.prototype.calculateEnoughPaint = function (room) {
    if (this.calculateLiters() > room.area) {
        room.painted = true;
        return true;
    }
    return false
}


module.exports = Decorator;
