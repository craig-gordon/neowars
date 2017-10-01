class Unit {
  constructor() {
    hp: 100
  }
}

class Antiair extends Unit {
  constructor() {
    super();
    type: 'antiair',
    zone: 'L',
    moveRange: 6,
    moveType: 'tread',
    fuel: 60,
    maintenance: 0,
    cost: 7000,
    weapons: [
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
        },
      }
    ]
    fireAfterMove: true,
    carry: [],
    capture: false
  }
}

class APC extends Unit {
  constructor() {
    super();
    type: 'apc',
    zone: 'L',
    moveRange: 6,
    moveType: 'tread',
    fuel: 60,
    maintenance: 0,
    cost: 5000,
    weapons: [],
    fireAfterMove: false,
    carry: ['infantry', 'mech'],
    capture: false
  }
}

class Artillery extends Unit {
  constructor() {
    super();
    type: 'artillery',
    zone: 'L',
    moveRange: 5,
    moveType: 'tread',
    fuel: 50,
    maintenance: 0,
    cost: 6000,
    weapons: [
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
        },
      }
    ]
    fireAfterMove: false,
    carry: [],
    capture: false
  }
}

class Bcopter extends Unit {
  constructor() {
    super();
    type: 'bcopter',
    zone: 'A',
    moveRange: 6,
    moveType: 'air',
    fuel: 99,
    maintenance: 2,
    cost: 9000,
    weapons: [
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
          missiles: 65
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
        ammo: Infinity,
        damageTo: {

        }
      }
    ],
    fireAfterMove: true,
    carry: [],
    capture: false
  }
}

class Bomber extends Unit {
  constructor() {
    super();
    type: 'bomber',
    zone: 'A',
    moveRange: 7,
    moveType: 'air',
    fuel: 99,
    maintenance: 5,
    cost: 20000,
    weapons: [
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
        },
      }
    ]
    fireAfterMove: true,
    carry: [],
    capture: false
  }
}

class Fighter extends Unit {
  constructor() {
    super();
    type: 'fighter',
    zone: 'A',
    moveRange: 9,
    moveType: 'air',
    fuel: 99,
    maintenance: 5,
    cost: 16000,
    weapons: [
      {
        name: 'missiles',
        range: 1,
        ammo: 9,
        damageTo: {
          bcopter: 100,
          bomber: 100,
          fighter: 55,
          tcopter: 100
        },
      }
    ]
    fireAfterMove: true,
    carry: [],
    capture: false
  }
}

class Infantry extends Unit {
  constructor() {
    super();
    type: 'infantry',
    zone: 'L',
    moveRange: 3,
    moveType: 'inf',
    fuel: 99,
    maintenance: 0,
    cost: 1500,
    weapons: [
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
        },
      }
    ]
    fireAfterMove: true,
    carry: [],
    capture: true
  }
}

class MdTank extends Unit {
  contructor() {
    super();
    type: 'mdtank',
    zone: 'L',
    moveRange: 5,
    moveType: 'tread',
    fuel: 50,
    maintenance: 0,
    cost: 14000,
    weapons: [
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
        damageTo: {

        }
      }
    ],
    fireAfterMove: true,
    carry: [],
    capture: false
  }
}

class Mech extends Unit {
  contructor() {
    super();
    type: 'mech',
    zone: 'L',
    moveRange: 2,
    moveType: 'mech',
    fuel: 99,
    maintenance: 0,
    cost: 2500,
    weapons: [
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
        ammo: Infinity,
        damageTo: {

        }
      }
    ],
    fireAfterMove: true,
    carry: [],
    capture: true
  }
}

class Missiles extends Unit {
  constructor() {
    super();
    type: 'missiles',
    zone: 'L',
    moveRange: 5,
    moveType: 'tire',
    fuel: 99,
    maintenance: 0,
    cost: 10000,
    weapons: [
      {
        name: 'missiles',
        range: [3, 4, 5, 6]
        ammo: 6,
        damageTo: {
          bcopter: 120
          bomber: 100,
          fighter: 100,
          tcopter: 120
        },
      }
    ]
    fireAfterMove: false,
    carry: [],
    capture: false
  }
}

class Neotank extends Unit {
  contructor() {
    super();
    type: 'neotank',
    zone: 'L',
    moveRange: 6,
    moveType: 'tread',
    fuel: 99,
    maintenance: 0,
    cost: 20000,
    weapons: [
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
        ammo: Infinity,
        damageTo: {

        }
      }
    ],
    fireAfterMove: true,
    carry: [],
    capture: false
  }
}

class Recon extends Unit {
  constructor() {
    super();
    type: 'recon',
    zone: 'L',
    moveRange: 8,
    moveType: 'tire',
    fuel: 80,
    maintenance: 0,
    cost: 4000,
    weapons: [
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
    ]
    fireAfterMove: true,
    carry: [],
    capture: false
  }
}

class Rockets extends Unit {
  constructor() {
    super();
    type: 'rockets',
    zone: 'L',
    moveRange: 5,
    moveType: 'tire',
    fuel: 50,
    maintenance: 0,
    cost: 15000,
    weapons: [
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
    ]
    fireAfterMove: false,
    carry: [],
    capture: false
  }
}

class Tcopter extends Unit {
  constructor() {
    super();
    type: 'tcopter',
    zone: 'A',
    moveRange: 6,
    moveType: 'air',
    fuel: 99,
    maintenance: 2,
    cost: 5000,
    weapons: [],
    fireAfterMove: false,
    carry: ['infantry', 'mech'],
    capture: false
  }
}

class Tank extends Unit {
  contructor() {
    super();
    type: 'tank',
    zone: 'L',
    moveRange: 6,
    moveType: 'tread',
    fuel: 70,
    maintenance: 0,
    cost: 7000,
    weapons: [
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
        ammo: Infinity,
        damageTo: {

        }
      }
    ],
    fireAfterMove: true,
    carry: [],
    capture: false
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
}