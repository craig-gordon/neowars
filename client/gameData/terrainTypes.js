class Terrain {
  constructor(x, y) {
    this.position = [x, y];
  }
}

class Road extends Terrain {
  constructor(x, y) {
    super(x, y);
    this.terrain = 'road';
    this.defense = 0;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
  }
}

class Plains extends Terrain {
  constructor(x, y) {
    super(x, y);
    this.terrain = 'plains';
    this.defense = 1;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 2 
    };
  }
}

class Woods extends Terrain {
  constructor(x, y) {
    super(x, y);
    this.terrain = 'woods';
    this.defense = 2;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 2,
      W: 3 
    };
  }
}

class Mountain extends Terrain {
  constructor(x, y) {
    super(x, y);
    this.terrain = 'mountain';
    this.defense = 4;
    this.moveCosts = {
      A: 1,
      I: 2,
      M: 1,
    };
  }
}

class City extends Terrain {
  constructor(x, y, countryName = null) {
    super(x, y);
    this.terrain = 'city';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.countryName = countryName;
    this.canBuild = false;
    this.unitList = [
      {name: 'antiair'},
      {name: 'apc'},
      {name: 'artillery'},
      {name: 'infantry'},
      {name: 'mdtank'},
      {name: 'mech'},
      {name: 'missiles'},
      {name: 'neotank'},
      {name: 'recon'},
      {name: 'rockets'},
      {name: 'tank'}
    ];
  }
}

class Base extends Terrain {
  constructor(x, y, countryName = null) {
    super(x, y);
    this.terrain = 'base';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.countryName = countryName;
    this.canBuild = true;
    this.unitList = [
      {name: 'antiair', cost: 7000},
      {name: 'apc', cost: 5000},
      {name: 'artillery', cost: 6000},
      {name: 'infantry', cost: 1500},
      {name: 'mdtank', cost: 14000},
      {name: 'mech', cost: 2500},
      {name: 'missiles', cost: 10000},
      {name: 'neotank', cost: 20000},
      {name: 'recon', cost: 4000},
      {name: 'rockets', cost: 15000},
      {name: 'tank', cost: 7000}
    ];
  }
}

class Airport extends Terrain {
  constructor(x, y, countryName = null) {
    super(x, y);
    this.terrain = 'airport';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.countryName = countryName;
    this.canBuild = true;
    this.unitList = [
      {name: 'bcopter', cost: 9000},
      {name: 'bomber', cost: 20000},
      {name: 'fighter', cost: 16000},
      {name: 'tcopter', cost: 5000}
    ];
  }
}

class HQ extends Terrain {
  constructor(x, y, countryName) {
    super(x, y);
    this.terrain = 'hq';
    this.defense = 4;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.countryName = countryName;
    this.endsGame = true;
    this.canBuild = false;
    this.unitList = [
      {name: 'antiair'},
      {name: 'apc'},
      {name: 'artillery'},
      {name: 'infantry'},
      {name: 'mdtank'},
      {name: 'mech'},
      {name: 'missiles'},
      {name: 'neotank'},
      {name: 'recon'},
      {name: 'rockets'},
      {name: 'tank'}
    ];
  }
}

export const terrainTypes = {
  'road': Road,
  'plains': Plains,
  'woods': Woods,
  'mountain': Mountain,
  'city': City,
  'base': Base,
  'airport': Airport,
  'hq': HQ
};