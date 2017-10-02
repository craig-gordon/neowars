class Unit {
  constructor(country, position) {
    this.hp = 100;
    this.country = country;
    this.position = position;
  }
}

class Antiair extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'antiair';
    this.zone = 'L';
    this.moveRange = 6;
    this.moveType = 'T';
    this.fuel = 60;
    this.maintenance = 0;
    this.cost = 7000;
    this.weapons = [
      {
        name: 'vulcan cannon',
        range: 1,
        ammo: 9,
        damageTo: {
          antiair: 45,
          apc: 50,
          artillery: 50,
          bcopter: 120,
          bomber: 75,
          fighter: 65,
          infantry: 105,
          mdtank: 10,
          mech: 105,
          missiles: 55,
          neotank: 5,
          recon: 60,
          rockets: 55,
          tcopter: 120,
          tank: 25
        }
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = false;
  }
}

class APC extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'apc';
    this.zone = 'L';
    this.moveRange = 6;
    this.moveType = 'T';
    this.fuel = 60;
    this.maintenance = 0;
    this.cost = 5000;
    this.weapons = [];
    this.fireAfterMove = false;
    this.carry = ['infantry', 'mech'];
    this.capture = false;
  }
}

class Artillery extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'artillery';
    this.zone = 'L';
    this.moveRange = 5;
    this.moveType = 'T';
    this.fuel = 50;
    this.maintenance = 0;
    this.cost = 6000;
    this.weapons = [
      {
        name: 'cannon',
        range: [2, 3],
        ammo: 9,
        damageTo: {
          antiair: 75,
          apc: 70,
          artillery: 75,
          infantry: 90,
          mdtank: 45,
          mech: 85,
          missiles: 80,
          neotank: 40,
          recon: 80,
          rockets: 80,
          tank: 70
        }
      }
    ];
    this.fireAfterMove = false;
    this.carry = [];
    this.capture = false;
  }
}

class Bcopter extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'bcopter';
    this.zone = 'A';
    this.moveRange = 6;
    this.moveType = 'A';
    this.fuel = 99;
    this.maintenance = 2;
    this.cost = 9000;
    this.weapons = [
      {
        name: 'missiles',
        range: 1,
        ammo: 6,
        damageTo: {
          antiair: 25,
          apc: 60,
          artillery: 65,
          bcopter: 65,
          infantry: 75,
          mdtank: 25,
          mech: 75,
          missiles: 65,
          neotank: 20,
          recon: 55,
          rockets: 65,
          tcopter: 95,
          tank: 55
        }
      },
      {
        name: 'machine gun',
        range: 1,
        ammo: Infinity
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = false;
  }
}

class Bomber extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'bomber';
    this.zone = 'A';
    this.moveRange = 7;
    this.moveType = 'A';
    this.fuel = 99;
    this.maintenance = 5;
    this.cost = 20000;
    this.weapons = [
      {
        name: 'bombs',
        range: 1,
        ammo: 9,
        damageTo: {
          antiair: 95,
          apc: 105,
          artillery: 105,
          infantry: 110,
          mdtank: 95,
          mech: 110,
          missiles: 105,
          neotank: 90,
          recon: 105,
          rockets: 105,
          tank: 105
        }
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = false;
  }
}

class Fighter extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'fighter';
    this.zone = 'A';
    this.moveRange = 9;
    this.moveType = 'A';
    this.fuel = 99;
    this.maintenance = 5;
    this.cost = 16000;
    this.weapons = [
      {
        name: 'missiles',
        range: 1,
        ammo: 9,
        damageTo: {
          bcopter: 100,
          bomber: 100,
          fighter: 55,
          tcopter: 100
        }
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = false;
  }
}

class Infantry extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'infantry';
    this.zone = 'L';
    this.moveRange = 3;
    this.moveType = 'I';
    this.fuel = 99;
    this.maintenance = 0;
    this.cost = 1500;
    this.weapons = [
      {
        name: 'machine gun',
        range: 1,
        ammo: Infinity,
        damageTo: {
          antiair: 5,
          apc: 14,
          artillery: 15,
          bcopter: 7,
          infantry: 55,
          mdtank: 1,
          mech: 45,
          missiles: 26,
          neotank: 1,
          recon: 12,
          rockets: 25,
          tcopter: 30,
          tank: 5
        }
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = true;
  }
}

class MdTank extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'mdtank';
    this.zone = 'L';
    this.moveRange = 5;
    this.moveType = 'T';
    this.fuel = 50;
    this.maintenance = 0;
    this.cost = 14000;
    this.weapons = [
      {
        name: 'cannon',
        range: 1,
        ammo: 8,
        damageTo: {
          antiair: 105,
          apc: 105,
          artillery: 105,
          mdtank: 55,
          missiles: 105,
          neotank: 45,
          recon: 105,
          rockets: 105,
          tank: 85
        }
      },
      {
        name: 'machine gun',
        range: 1,
        ammo: Infinity,
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = false;
  }
}

class Mech extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'mech';
    this.zone = 'L';
    this.moveRange = 2;
    this.moveType = 'M';
    this.fuel = 99;
    this.maintenance = 0;
    this.cost = 2500;
    this.weapons = [
      {
        name: 'bazooka',
        range: 1,
        ammo: 3,
        damageTo: {
          antiair: 65,
          apc: 75,
          artillery: 70,
          mdtank: 15,
          missiles: 85,
          neotank: 15,
          recon: 85,
          rockets: 85,
          tank: 55
        }
      },
      {
        name: 'machine gun',
        range: 1,
        ammo: Infinity
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = true;
  }
}

class Missiles extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'missiles';
    this.zone = 'L';
    this.moveRange = 5;
    this.moveType = 'W';
    this.fuel = 99;
    this.maintenance = 0;
    this.cost = 10000;
    this.weapons = [
      {
        name: 'missiles',
        range: [3, 4, 5, 6],
        ammo: 6,
        damageTo: {
          bcopter: 120,
          bomber: 100,
          fighter: 100,
          tcopter: 120
        },
      }
    ];
    this.fireAfterMove = false;
    this.carry = [];
    this.capture = false;
  }
}

class Neotank extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'neotank';
    this.zone = 'L';
    this.moveRange = 6;
    this.moveType = 'T';
    this.fuel = 99;
    this.maintenance = 0;
    this.cost = 20000;
    this.weapons = [
      {
        name: 'cannon',
        range: 1,
        ammo: 9,
        damageTo: {
          antiair: 115,
          apc: 125,
          artillery: 115,
          mdtank: 75,
          missiles: 125,
          neotank: 55,
          recon: 125,
          rockets: 125,
          tank: 105
        }
      },
      {
        name: 'machine gun',
        range: 1,
        ammo: Infinity
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = false;
  }
}

class Recon extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'recon';
    this.zone = 'L';
    this.moveRange = 8;
    this.moveType = 'W';
    this.fuel = 80;
    this.maintenance = 0;
    this.cost = 4000;
    this.weapons = [
      {
        name: 'machine gun',
        range: 1,
        ammo: Infinity,
        damageTo: {
          antiair: 4,
          apc: 45,
          artillery: 45,
          bcopter: 12,
          infantry: 70,
          mdtank: 1,
          mech: 65,
          missiles: 55,
          neotank: 1,
          recon: 35,
          rockets: 55,
          tcopter: 35,
          tank: 6
        },
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = false;
  }
}

class Rockets extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'rockets';
    this.zone = 'L';
    this.moveRange = 5;
    this.moveType = 'W';
    this.fuel = 50;
    this.maintenance = 0;
    this.cost = 15000;
    this.weapons = [
      {
        name: 'rockets',
        range: [3, 4, 5],
        ammo: 6,
        damageTo: {
          antiair: 85,
          apc: 80,
          artillery: 80,
          infantry: 95,
          mdtank: 55,
          mech: 90,
          missiles: 90,
          neotank: 50,
          recon: 90,
          rockets: 90,
          tank: 80
        },
      }
    ];
    this.fireAfterMove = false;
    this.carry = [];
    this.capture = false;
  }
}

class Tcopter extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'tcopter';
    this.zone = 'A';
    this.moveRange = 6;
    this.moveType = 'A';
    this.fuel = 99;
    this.maintenance = 2;
    this.cost = 5000;
    this.weapons = [],
    this.fireAfterMove = false;
    this.carry = ['infantry', 'mech'];
    this.capture = false;
  }
}

class Tank extends Unit {
  constructor(country, position) {
    super(country, position);
    this.type = 'tank';
    this.zone = 'L';
    this.moveRange = 6;
    this.moveType = 'T';
    this.fuel = 70;
    this.maintenance = 0;
    this.cost = 7000;
    this.weapons = [
      {
        name: 'cannon',
        range: 1,
        ammo: 9,
        damageTo: {
          antiair: 65,
          apc: 75,
          artillery: 70,
          mdtank: 15,
          missiles: 85,
          neotank: 15,
          recon: 85,
          rockets: 85,
          tank: 55
        }
      },
      {
        name: 'machine gun',
        range: 1,
        ammo: Infinity
      }
    ];
    this.fireAfterMove = true;
    this.carry = [];
    this.capture = false;
  }
}

window.createUnit = {
  antiair: Antiair,
  apc: APC,
  artillery: Artillery,
  bcopter: Bcopter,
  bomber: Bomber,
  fighter: Fighter,
  infantry: Infantry,
  mdtank: MdTank,
  mech: Mech,
  missiles: Missiles,
  neotank: Neotank,
  recon: Recon,
  rockets: Rockets,
  tcopter: Tcopter,
  tank: Tank
};