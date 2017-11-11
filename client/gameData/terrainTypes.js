class Terrain {
  constructor(x, y) {
    this.position = [x, y];
  }
}

class Road extends Terrain {
  constructor(x, y) {
    super(x, y);
    this.terrain = 'R';
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
    this.terrain = 'P';
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
    this.terrain = 'W';
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
    this.terrain = 'M';
    this.defense = 4;
    this.moveCosts = {
      A: 1,
      I: 2,
      M: 1,
    };
  }
}

class City extends Terrain {
  constructor(x, y, country = null) {
    super(x, y);
    this.terrain = 'C';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.country = country;
    this.canHeal = [
      'antiair',
      'apc',
      'artillery',
      'infantry',
      'mdtank',
      'mech',
      'missiles',
      'neotank',
      'recon',
      'rockets',
      'tank'
    ];
  }
}

class Base extends Terrain {
  constructor(x, y, country = null) {
    super(x, y);
    this.terrain = 'B';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.country = country;
    this.canHeal = [
      'antiair',
      'apc',
      'artillery',
      'infantry',
      'mdtank',
      'mech',
      'missiles',
      'neotank',
      'recon',
      'rockets',
      'tank'
    ];
    this.canBuild = [
      ['antiair', 7000],
      ['apc', 5000],
      ['artillery', 6000],
      ['infantry', 1500],
      ['mdtank', 14000],
      ['mech', 2500],
      ['missiles', 10000],
      ['neotank', 20000],
      ['recon', 4000],
      ['rockets', 15000],
      ['tank', 7000]
    ];
  }
}

class Airport extends Terrain {
  constructor(x, y, country = null) {
    super(x, y);
    this.terrain = 'A';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.country = country;
    this.canHeal = [
      'bcopter',
      'bomber',
      'fighter',
      'tcopter'
    ];
    this.canBuild = [
      ['bcopter', 9000],
      ['bomber', 20000],
      ['fighter', 16000],
      ['tcopter', 5000]
    ];
  }
}

class HQ extends Terrain {
  constructor(x, y, country) {
    super(x, y);
    this.terrain = 'H';
    this.defense = 4;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.country = country;
    this.endsGame = true;
    this.canHeal = [
      'antiair',
      'apc',
      'artillery',
      'infantry',
      'mdtank',
      'mech',
      'missiles',
      'neotank',
      'recon',
      'rockets',
      'tank'
    ];
  }
}

const setTerrain = {
  R: Road,
  P: Plains,
  W: Woods,
  M: Mountain,
  C: City,
  B: Base,
  A: Airport,
  H: HQ
};

export default setTerrain;