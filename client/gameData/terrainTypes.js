class Terrain {
  constructor(x, y) {
    this.position = [x, y];
  }
}

class Road extends Terrain {
  constructor(x, y) {
    super(x, y);
    this.type = 'R';
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

class Plain extends Terrain {
  constructor(x, y) {
    super(x, y);
    this.type = 'P';
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

class Wood extends Terrain {
  constructor(x, y) {
    super(x, y);
    this.type = 'W';
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
    this.type = 'M';
    this.defense = 4;
    this.moveCosts = {
      A: 1,
      I: 2,
      M: 1,
    };
  }
}

class City extends Terrain {
  constructor(x, y, owner = null) {
    super(x, y);
    this.type = 'C';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.owner = owner;
    this.canHeal = {
      antiair: true,
      apc: true,
      artillery: true,
      infantry: true,
      mdtank: true,
      mech: true,
      missiles: true,
      neotank: true,
      recon: true,
      rockets: true,
      tank: true
    };
  }
}

class Base extends Terrain {
  constructor(x, y, owner = null) {
    super(x, y);
    this.type = 'B';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.owner = owner;
    this.canHeal = {
      antiair: true,
      apc: true,
      artillery: true,
      bcopter: false,
      bomber: false,
      fighter: false,
      infantry: true,
      mdtank: true,
      mech: true,
      missiles: true,
      neotank: true,
      recon: true,
      rockets: true,
      tcopter: false,
      tank: true
    };
    this.canBuild = {
      antiair: 7000,
      apc: 5000,
      artillery: 6000,
      infantry: 1500,
      mdtank: 14000,
      mech: 2500,
      missiles: 10000,
      neotank: 20000,
      recon: 4000,
      rockets: 15000,
      tank: 7000
    };
  }
}

class Airport extends Terrain {
  constructor(x, y, owner = null) {
    super(x, y);
    this.type = 'A';
    this.defense = 3;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.owner = owner;
    this.canHeal = {
      antiair: false,
      apc: false,
      artillery: false,
      bcopter: true,
      bomber: true,
      fighter: true,
      infantry: false,
      mdtank: false,
      mech: false,
      missiles: false,
      neotank: false,
      recon: false,
      rockets: false,
      tcopter: true,
      tank: false
    };
    this.canBuild = {
      bcopter: 9000,
      bomber: 20000,
      fighter: 16000,
      tcopter: 5000
    };
  }
}

class HQ extends Terrain {
  constructor(x, y, owner) {
    super(x, y);
    this.type = 'H';
    this.defense = 4;
    this.moveCosts = {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    };
    this.captureHp = 20;
    this.owner = owner;
    this.endsGame = true;
    this.canHeal = {
      antiair: true,
      apc: true,
      artillery: true,
      infantry: true,
      mdtank: true,
      mech: true,
      missiles: true,
      neotank: true,
      recon: true,
      rockets: true,
      tank: true
    };
  }
}

window.setTerrain = {
  R: Road,
  P: Plain,
  W: Wood,
  M: Mountain,
  C: City,
  B: Base,
  A: Airport,
  H: HQ
};