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
    this.space = space;
};

var transports = {
    //transports
    carrak: new Hull("carrak", "transport", {dorsal: 2}, 38),
    goliath: new Hull("goliath", "transport", {dorsal: 1, port: 1, starboard: 40}),
    universe: new Hull("universe", "transport", {dorsal: 1, port: 1, starboard: 1}, 94),
    loki: new Hull("loki", "transport", {prow: 1, dorsal: 1}, 45),
    orion: new Hull("orion", "transport", {dorsal: 1, keel: 1}, 40),
    jericho: new Hull("jericho", "transport", {prow: 1, port: 1, starboard: 1}, 45),
    vagabond: new Hull("vagabond", "transport", {prow: 1, dorsal: 1}, 40)
};

var raiders = {
    meritechshrike: new Hull("meritechshrike", "raider", {prow: 1, dorsal: 1}, 35),
    iconoclast: new Hull("iconoclast", "raider", {dorsal: 2}, 32),
    viper: new Hull("viper", "raider", {dorsal: 1}, 29),
    cobra: new Hull("cobra", "raider", {dorsal: 1, keel: 1}, 35),
    hazeroth: new Hull("hazeroth", "raider", {prow: 1, dorsal: 1}, 35),
    havoc: new Hull("havoc", "raider", {prow: 1, dorsal: 1}, 40)
};

var frigates = {
    falchion: new Hull("falchion", "frigate", {prow: 1, dorsal: 2}, 34),
    claymore: new Hull("claymore", "frigate", {dorsal: 2}, 38),
    turbulent: new Hull("turbulent", "frigate", {dorsal: 2}, 42),
    firestorm: new Hull("firestorm", "frigate", {prow: 1, dorsal: 1}, 40),
    sword: new Hull("sword", "frigate", {dorsal: 2}, 40),
    tempest: new Hull("tempest", "frigate", {dorsal: 2}, 42)
};

var lightcruisers = {
    endeavour: new Hull("endeavour", "lightcruiser", {prow: 2, port: 1, starboard: 1}, 58),
    defiant: new Hull("defiant", "lightcruiser", {prow: 1, port: 1, starboard: 1}, 55),
    secutor: new Hull("secutor", "lightcruiser", {prow: 1, port: 1, starboard: 1, dorsal: 1}, 58),
    lathe: new Hull("lathe", "lightcruiser", {prow: 1, port: 1, starboard: 1}, 60),
    dauntless: new Hull("dauntless", "lightcruiser", {prow: 1, port: 2, starboard: 2}, 60)
};

var cruisers = {

};

var grandcruisers = {

};

var battlecruisers = {

};

var hulls = {
    transports: transports,
    raiders: raiders,
    frigates: frigates,
    lightcruisers: lightcruisers,
    cruisers: cruisers,
    grandcruisers: grandcruisers,
    battlecruisers: battlecruisers
};

var Ship = function (name, hull) {
    this.name = name;
    this.hull = hull;
    this.essential = null;
    this.supplementary = null;
    this.power_used = null;
    this.space_used = null;
};

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[Math.floor(keys.length * Math.random())]];
};

//testing class linkage
var randomhull = randomProperty(transports);
var str = JSON.stringify(hulls, null, 4);
console.log(str);

var test = new Ship("Mordacity", randomhull);
var str = JSON.stringify(test, null, 4);
console.log(str);


console.log("Created the " + test.name + " a " + test.hull.name + " class " + test.hull.type);
console.log("Mountpoints available");
console.log("prow:" + test.hull.mountpoints.prow);
console.log("dorsal:" + test.hull.mountpoints.dorsal);
console.log("port:" + test.hull.mountpoints.port);
console.log("starboard:" + test.hull.mountpoints.starboard);
console.log("keel:" + test.hull.mountpoints.keel);
