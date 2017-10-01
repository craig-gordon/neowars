class Terrain {
  constructor(x, y) {
    position: [x, y]
  }
}

class Road extends Terrain {
  constructor(x, y) {
    super(x, y);
    defense: 0
    moveCosts: {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    }
  }
}

class Plain extends Terrain {
  constructor(x, y) {
    super(x, y);
    defense: 1
    moveCosts: {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 2 
    }
  }
}

class Wood extends Terrain {
  constructor(x, y) {
    super(x, y);
    defense: 2
    moveCosts: {
      A: 1,
      I: 1,
      M: 1,
      T: 2,
      W: 3 
    }    
  }
}

class Mountain extends Terrain {
  constructor(x, y) {
    super(x, y);
    moveCosts: {
      A: 1,
      I: 2,
      M: 1,
    }   
  }
}

class City extends Terrain {
  constructor(x, y, owner) {
    super(x, y);
    moveCosts: {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    },
    captureHp: 20,
    owner: owner,
    canHeal: {
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
    },
  }
}

class Factory extends Terrain {
  constructor(x, y, owner) {
    super(x, y);
    moveCosts: {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    },
    captureHp: 20,
    owner: owner,
    canHeal: {
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
    },
    canBuild: {
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
    }
  }
}

class Airport extends Terrain {
  constructor(x, y, owner) {
    super(x, y);
    moveCosts: {
      A: 1,
      I: 1,
      M: 1,
      T: 1,
      W: 1
    },
    captureHp: 20,
    owner: owner,
    canHeal: {
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
    },
    canBuild: {
      bcopter: 9000,
      bomber: 20000,
      fighter: 16000,
      tcopter: 5000
    }
  }
}