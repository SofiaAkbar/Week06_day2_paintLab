// Room Constructor and prototypes here
const Room = function (area, painted = false) {
    this.area = area;
    this.painted = painted;
}

Room.prototype.paintTheRoom = function () {
    this.painted = true;
};

module.exports = Room;
