// Paint Can Constructor and prototypes here
const PaintCan = function (liters, empty = false) {
    this.liters = liters;
    this.empty = empty;
};

PaintCan.prototype.emptyCan = function () {
    this.liters = 0;
    this.empty = true;
}

module.exports = PaintCan;
