import raf from 'raf';

import { unitTypes as Unit } from '../client/gameData/unitTypes';

import { countTilesBetweenUnits, findAllTargetsInRange } from '../client/gameData/calculations';

describe('countTilesBetweenUnits', () => {

  it('calculates the correct number of tiles between two units', () => {
    let u1 = new Unit['artillery']('Floria', [4, 0]);
    let u2 = new Unit['bcopter']('Ranford', [15, 8]);

    expect(countTilesBetweenUnits(u1.position, u2.position)).toBe(19);
  });

  it('calculates the correct number of tiles between two units far away', () => {
    let u1 = new Unit['bomber']('Floria', [94, 251]);
    let u2 = new Unit['mech']('Floria', [3, 480]);

    expect(countTilesBetweenUnits(u1.position, u2.position)).toBe(320);
  });

});

describe('findAllTargetsInRange', () => {
  let aUnit = new Unit['tank']('Floria', [1, 1]);
  let dUnit1 = new Unit['tank']('Ranford', [1, 0]);
  let dUnit2 = new Unit['bomber']('Ranford', [1, 2]);
  let dUnit3 = new Unit['tcopter']('Ranford', [0, 1]);
  let dUnit4 = new Unit['apc']('Floria', [2, 1]);
  let units = [aUnit, dUnit1, dUnit2, dUnit3, dUnit4];

  it('identifies every unit in firing range of an attacking unit for both of its weapons', () => {
    expect(findAllTargetsInRange(0, units)).toHaveLength(3);
  });
})