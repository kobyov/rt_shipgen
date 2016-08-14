var Hull = function (name, type, mountpoints, space) {
    this.name = name;
    this.type = type;
    this.mountpoints = {
        prow: mountpoints.prow || 0,
        dorsal: mountpoints.dorsal || 0,
        port: mountpoints.port || 0,
        starboard: mountpoints.starboard || 0,
        keel: mountpoints.keel || 0
    };
    this.space = null;
};

var hulls = {
    //dauntless: "Dauntless"
    dauntless: new Hull("Dauntless", "Light Cruiser", {prow: 1, port: 2, starboard: 2}, 50)
};

var Ship = function (name, type, hull) {
    this.name = name;
    this.type = type;
    this.hull = hulls[hull];
    this.essential = null;
    this.supplementary = null;
    this.power_used = null;
    this.space_used = null;
};

//testing class linkage
var test = new Ship("Mordacity", "Light Cruiser", "dauntless");
console.log("Created the " + test.name + " a " + test.hull.name + " class " + test.type);
console.log("Mountpoints available");
console.log("prow:" + test.hull.mountpoints.prow);
console.log("dorsal:" + test.hull.mountpoints.dorsal);
console.log("port:" + test.hull.mountpoints.port);
console.log("starboard:" + test.hull.mountpoints.starboard);
console.log("keel:" + test.hull.mountpoints.keel);
