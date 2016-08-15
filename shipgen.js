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

var Component = function (name, description, type, power, space) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.power = power || 0;
    this.space = space || 0;
};

var transports = {
    carrak: new Hull("carrak", "transport", {dorsal: 2}, 38),
    goliath: new Hull("goliath", "transport", {dorsal: 1, port: 1, starboard: 1}, 40),
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
    conquest: new Hull("conquest", "cruiser", {port: 2, starboard: 2}, 56),
    ambition: new Hull("ambition", "cruiser", {prow: 1, port: 2, starboard: 2}, 75),
    dictator: new Hull("dictator", "cruiser", {prow: 1, port: 2, starboard: 2}, 65),
    tyrant: new Hull("tyrant", "cruiser", {prow: 1, port: 2, starboard: 3}, 77),
    lunar: new Hull("lunar", "cruiser", {prow: 1, port: 2, starboard: 3}, 75)
};

var grandcruisers = {
    avenger: new Hull("avenger", "grandcruiser", {port: 3, starboard: 3}, 90),
    repulsive: new Hull("repulsive", "grandcruiser", {prow: 1, port: 2, starboard: 3}, 90),
    exorcist: new Hull("exorcist", "grandcruiser", {port: 3, starboard: 3}, 80)
};

var battlecruisers = {
    overlord: new Hull("overlord", "battlecruiser", {prow: 1, port: 2, starboard: 2, dorsal: 1}, 78),
    mars: new Hull("mars", "battlecruiser", {prow: 1, port: 2, starboard: 2, dorsal: 1}, 54),
    chalice: new Hull("chalice", "battlecruiser", {prow: 1, port: 2, starboard: 2, dorsal: 1}, 75),
    armageddon: new Hull("armageddon", "battlecruiser", {prow: 1, port: 2, starboard: 2, dorsal: 1}, 73)
};

var hulls = {
    transport: transports,
    raider: raiders,
    frigate: frigates,
    lightcruiser: lightcruisers,
    cruiser: cruisers,
    grandcruiser: grandcruisers,
    battlecruiser: battlecruisers
};

var transport_essentials = {
    drive: {
        lathe2a: new Component("lathe2a", "Lathe-pattern Class 2a Drive", "drive", "40", "14"),
        jovian1: new Component("jovian1", "Jovian-pattern Class 1 Drive", "drive", "35", "8"),
        lathe1: new Component("lathe1", "Lathe-pattern Class 1 Drive", "drive", "40", "12")
    },
    warp: {

    },
    bridge: {

    },
    gellar: {

    },
    sustainer: {

    },
    shield: {

    },
    quarters: {

    },
    auger: {

    }
};

var raider_essentials = {

};

var frigate_essentials = {

};

var lightcruiser_essentials = {

};

var cruiser_essentials = {

};

var grandcruiser_essentials = {

};

var battlecruiser_essentials = {

};

var essentials = {
    transport: transport_essentials,
    raider: raider_essentials,
    frigate: frigate_essentials,
    lightcruiser: lightcruiser_essentials,
    cruiser: lightcruiser_essentials,
    grandcruiser: grandcruiser_essentials,
    battlecruiser: battlecruiser_essentials
};

var components = {
    essential: essentials
};

var Ship = function (name, type, hull) {
    this.name = name;
    this.hull = hull;
    this.essential = {
        drive: null,
        warp: null,
        bridge: null,
        gellar: null,
        sustainer: null,
        shield: null,
        quarters: null,
        auger: null
    };
    this.supplementary = null;
    this.power_available = 0;
    this.space_available = hull.space;
};

var return_random = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[Math.floor(keys.length * Math.random())]];
};

var select_random = function (obj) {
    var keys = Object.keys(obj);
    return keys[Math.floor(keys.length * Math.random())];
};

var build_ship = function (requirements) {
    this.name = requirements.name || null;
    this.type = requirements.type || null;
    this.hull = requirements.hull || null;

    if (!requirements.name) {
        requirements.name = "Mordacity";
    }
    if (!requirements.type) {
        requirements.type = select_random(hulls);
    }
    if (!requirements.hull) {
        requirements.hull = return_random(hulls[requirements.type]);
    } else {
        requirements.hull = hulls[requirements.type][requirements.hull];
    }
    var ship = new Ship(requirements.name, requirements.type, requirements.hull);
    return ship;
};

//testing class linkage
var str = JSON.stringify(hulls, null, 4);
console.log(str);

var test = build_ship({name: null, type: "transport", hull: null});
var str = JSON.stringify(test, null, 4);
console.log(str);


console.log("Created the " + test.name + " a " + test.hull.name + " class " + test.hull.type);
console.log("Mountpoints available");
console.log("prow:" + test.hull.mountpoints.prow);
console.log("dorsal:" + test.hull.mountpoints.dorsal);
console.log("port:" + test.hull.mountpoints.port);
console.log("starboard:" + test.hull.mountpoints.starboard);
console.log("keel:" + test.hull.mountpoints.keel);
