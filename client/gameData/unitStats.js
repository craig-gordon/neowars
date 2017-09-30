class Unit {
  constructor() {
    hp: 100
  }
}

class Antiair extends Unit {
  constructor() {
    super();
    type: 'antiair',
    moveRange: 6,
    moveType: 'T',
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
    moveRange: 6,
    moveType: 'T',
    ammo: 0,
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
    moveRange: 5,
    moveType: 'T',
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
    moveRange: 6,
    moveType: 'A',
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
    moveRange: 7,
    moveType: 'A',
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
    moveRange: 9,
    moveType: 'A',
    fuel: 99,
    maintenance: 5,
    cost: 18000,
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

class 