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

var components = {
    essential: null,
    transport: null,
    raider: null,
    frigate: null,
    lightcruiser: null,
    cruiser: null,
    grandcruiser: null,
    battlecruiser: null
};

components.essential = {
    drive: {
        lathe2a: new Component("lathe2a", "Lathe-pattern Class 2a Drive", "drive", 40, 14),
        jovian1: new Component("jovian1", "Jovian-pattern Class 1 Drive", "drive", 35, 8),
        lathe1: new Component("lathe1", "Lathe-pattern Class 1 Drive", "drive", 40, 12),
        lathe2b: new Component("lathe2b", "Lathe-pattern Class 2b Escord Drive", "drive", 47, 15),
        segrazian: new Component("segrazian", "Segrazian Viperdrive Pirate Engine", "drive", 45, 16),
        jovian2: new Component("jovian2", "Jovian-pattern Class 2 Drive", "drive", 45, 10),
        jovian81: new Component("jovian81", "Jovian-pattern Class 8.1 Drive", "drive", 44, 11),
        jovian82: new Component("jovian82", "Jovian-pattern Class 8.2 Drive", "drive", 59, 13),
        jovianw: new Component("jovianw", "Jovian-pattern Warcruiser Drive", "drive", 65, 14),
        jovian3: new Component("jovian3", "Jovian-pattern Class 3 Drive", "drive", 60, 12)
    },
    warp: {
        miroslav: new Component("miroslav", "Miroslav G-616.b Warp Engine", "warp", 8, 10),
        markov: new Component("markov", "Markov 1 Warp Engine", "warp", 12, 12),
        albanov: new Component("albanov", "Albanov 1 Warp Engine", "warp", 10, 11),
        klenova: new Component("klenova", "Klenova Class M Warp Engine", "warp", 10, 10),
        strelov: new Component("strelov", "Strelov 1 Warp Engine", "warp", 10, 10)
    },
    bridge: {
        smuggler: new Component("smuggler", "Smuggler's Bridge", "bridge", 1, 1),
        commerce: new Component("commerce", "Commerce Bridge", "bridge", 1, 1),
        explorer: new Component("explorer", "Exploration Bridge", "bridge", 4, 1),
        combat: new Component("combat", "Combat Bridge", "bridge", 1, 1),
        command: new Component("command", "Command Bridge", "bridge", 2, 1),
        armoured_s: new Component("armoured_s", "Armoured Command Bridge", "bridge", 2, 2)
    },
    gellar: {
        belecane: new Component("belecane", "Belecane-pattern 90.r Gellar Field", "gellar", 1, 0),
        emergency: new Component("emergency", "Emergency Gellar Field", "gellar", 2, 0),
        standard: new Component("standard", "Gellar Field", "gellar", 1, 0),
        warpsbane: new Component("warpsbane", "Warpsbane Hull", "gellar", 1, 0),
        mezoa: new Component("mezoa", "Mezoa Gellar Void Integrant", "gellar", 0, 0)
    },
    sustainer: {
        clemency_s: new Component("clemency_s", "Clemency-pattern Life Sustainer", "sustainer", 4, 4),
        euphoric_s: new Component("euphoric_s", "Euphoric Life Sustainer", "sustainer", 4, 2),
        m1r_s: new Component("m1r_s", "M-1.r Life Sustainer", "sustainer", 3, 1),
        vitae_s: new Component("vitae_s", "Vitae-pattern Life Sustainer", "sustainer", 4, 2)
    },
    shield: {
        voss: new Component("voss", "Voss Glimmer-pattern Void Shield Array", "shield", 3, 1),
        repulsor: new Component("repulsor", "Repulsor Shield", "shield", 6, 1),
        single: new Component("single", "Single Void Shield Array", "shield", 5, 1)
    },
    quarters: {
        bilge_s: new Component("bilge_s", "Bilge Rat Quarters", "quarters", 1, 2),
        clan_s: new Component("clan_s", "Clan-kin Quarters", "quarters", 1, 4),
        cold_s: new Component("cold_s", "Cold Quarters", "quarters", 3, 4),
        slave_s: new Component("slave_s", "Slave Quarters", "quarters", 1, 1),
        pressed_s: new Component("pressed_s", "Pressed-crew Quarters", "quarters", 1, 2),
        voidsmen_s: new Component("voidsmen_s", "Voidsmen Quarters", "quarters", 1, 3)
    },
    auger: {
        bg15: new Component("bg15", "BG-15 Assault Scanners", "auger", 5, 0),
        x470: new Component("x470", "X-470 Ultimo Array", "auger", 6, 0),
        w240: new Component("w240", "W-240 Passive Detection Arrays", "auger", 3, 0),
        m100: new Component("m100", "M-100 Auger Array", "auger", 3, 0),
        m201: new Component("m201", "M-201.b Auger Array", "auger", 5, 0),
        r50: new Component("r50", "R-50 Auspex Multi-band", "auger", 4, 0),
        deep: new Component("deep", "Deep Void Auger Array", "auger", 7, 0)
    }
};

components.transport = {
    essential: {
        drive: {
            lathe2a: components.essential.drive.lathe2a,
            jovian1: components.essential.drive.jovian1,
            lathe1: components.essential.drive.lathe1
        },
        warp: {
            miroslav: components.essential.warp.miroslav,
            markov: components.essential.warp.markov,
            albanov: components.essential.warp.albanov,
            klenova: components.essential.warp.klenova,
            strelov: components.essential.warp.strelov
        },
        bridge: {
            smuggler: components.essential.bridge.smuggler,
            commerce: components.essential.bridge.commerce,
            explorer: components.essential.bridge.explorer,
            combat: components.essential.bridge.combat
        },
        gellar: {
            belecane: components.essential.gellar.belecane,
            emergency: components.essential.gellar.emergency,
            standard: components.essential.gellar.standard,
            warpsbane: components.essential.gellar.warpsbane,
            mezoa: components.essential.gellar.mezoa
        },
        sustainer: {
            clemency_s: components.essential.sustainer.clemency_s,
            euphoric_s: components.essential.sustainer.euphoric_s,
            m1r_s: components.essential.sustainer.m1r_s,
            vitae_s: components.essential.sustainer.vitae_s
        },
        shield: {
            voss: components.essential.shield.voss,
            repulsor: components.essential.shield.repulsor,
            single: components.essential.shield.single
        },
        quarters: {
            bilge_s: components.essential.quarters.bilge_s,
            clan_s: components.essential.quarters.clan_s,
            cold_s: components.essential.quarters.cold_s,
            slave_s: components.essential.quarters.slave_s,
            pressed_s: components.essential.quarters.pressed_s,
            voidsmen_s: components.essential.quarters.voidsmen_s
        },
        auger: {
            bg15: components.essential.auger.bg15,
            x470: components.essential.auger.x470,
            w240: components.essential.auger.w240,
            m100: components.essential.auger.m100,
            m201: components.essential.auger.m201,
            r50: components.essential.auger.r50,
            deep: components.essential.auger.deep
        }
    }
};

components.raider = {
    essential : {
        drive: {
            lathe2b: components.essential.drive.lathe2b,
            segrazian: components.essential.drive.segrazian,
            jovian2: components.essential.drive.jovian2
        },
        warp: components.transport.essential.warp,
        bridge: {
            command: components.essential.bridge.command,
            armoured_s: components.essential.bridge.armoured_s,
            explorer: components.essential.bridge.explorer,
            combat: components.essential.bridge.combat
        },
        gellar: components.transport.essential.gellar,
        sustainer: components.transport.essential.sustainer,
        shield: components.transport.essential.shield,
        quarters: components.transport.essential.quarters,
        auger: components.transport.essential.auger
    }
};

components.frigate = {
    essential : {
        drive: {
            lathe2b: components.essential.drive.lathe2b,
            segrazian: components.essential.drive.segrazian,
            jovian2: components.essential.drive.jovian2,
            jovian81: components.essential.drive.jovian81
        },
        warp: components.transport.essential.warp,
        bridge: components.raider.essential.bridge,
        gellar: {
            belecane: components.essential.gellar.belecane,
            emergency: components.essential.gellar.emergency,
            standard: components.essential.gellar.standard,
            warpsbane: components.essential.gellar.warpsbane
        },
        sustainer: components.transport.essential.sustainer,
        shield: components.transport.essential.shield,
        quarters: components.transport.essential.quarters,
        auger: components.transport.essential.auger
    }
};

components.lightcruiser = {
    essential : {
        drive: {
            jovian82: components.essential.drive.jovian82,
            jovianw: components.essential.drive.jovianw,
            jovian3: components.essential.drive.jovian3
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
        auger: components.transport.essential.auger
    }
};

components.cruiser = {
    essential : {
        drive: {
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
        auger: components.transport.essential.auger
    }
};

components.grandcruiser = {
    essential : {
        drive: {
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
        auger: components.transport.essential.auger
    }
};

components.battlecruiser = {
    essential : {
        drive: {
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
        auger: components.transport.essential.auger
    }
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
    this.mounted = null;
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

var select_drive = function (type) {
    return return_random(components[type].essential.drive);
};

var select_essential = function (ship_type, component_type, available_power, available_space) {
    var component = return_random(components[ship_type].essential[component_type]);
    if (component.power <= available_power && component.space <= available_space) {
        return component;
    } else {
        return null;
    }
};

var build_ship = function (requirements) {
    this.name = requirements.name || null;
    this.type = requirements.type || null;

    if (!requirements.name) {
        this.name = "Mordacity";
    }
    if (!requirements.type) {
        this.type = select_random(hulls);
    }
    if (!requirements.hull) {
        this.hull = return_random(hulls[requirements.type]);
    } else {
        this.hull = hulls[requirements.type][requirements.hull];
    }
    var ship = new Ship(this.name, this.type, this.hull);

    var component, lastcomponent, component_attempts = 0;

    for (component in ship.essential) {
        if (component === "drive") {
            ship.essential[component] = select_drive(requirements.type);
            ship.power_available += ship.essential[component].power;
        } else {
            while (ship.essential[component] === null && component_attempts < 20) {
                ship.essential[component] = select_essential(requirements.type, component, ship.power_available, ship.space_available);
                component_attempts += 1;
            }
            if (ship.essential[component] === null) {
                console.log("unworkable ship generated, rebuilding")
                return build_ship(requirements);
            } else {
                ship.power_available -= ship.essential[component].power;
                component_attempts = 0;
            }
        }
        if (component !== lastcomponent) {
            ship.space_available -= ship.essential[component].space;
        }
    }
    return ship;
};

//testing class linkage
var str = JSON.stringify(hulls, null, 4);
console.log(str);

var test = build_ship({name: null, type: "raider", hull: null});
var str = JSON.stringify(test, null, 4);
console.log(str);


console.log("Created the " + test.name + " a " + test.hull.name + " class " + test.hull.type);
console.log("Mountpoints available");
console.log("prow:" + test.hull.mountpoints.prow);
console.log("dorsal:" + test.hull.mountpoints.dorsal);
console.log("port:" + test.hull.mountpoints.port);
console.log("starboard:" + test.hull.mountpoints.starboard);
console.log("keel:" + test.hull.mountpoints.keel);
