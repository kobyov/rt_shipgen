var Hull = function (type, name) {
    this.name = name;
    this.type = type;
    this.mountpoints = null;
    this.weapons = null;
};

var Ship = function (name, type, hull) {
    this.name = name;
    this.type = type;
    this.hull = new Hull(this.type, hull);
    this.essential = null;
    this.supplementary = null;
    this.power_used = null;
    this.space_used = null;
};

//testing linkage of things
var test = new Ship("Mordacity", "Light Cruiser", "Dauntless");
console.log("Created the " + test.name + " a " + test.hull.name + " class " + test.type);
