import _ from 'lodash';

export const countTilesBetweenUnits = (pos1, pos2) => Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);

export const findAllTargetsInRange = (idx, unitList) => {
  let aUnit = unitList.splice(idx, 1)[0];
  return _.flatten(
    _.map(aUnit.weapons, (weapon) => {
      let filtered = _.filter(unitList, (dUnit) => {
        return countTilesBetweenUnits(aUnit.position, dUnit.position) <= weapon.range
          && weapon.damageTo.hasOwnProperty(dUnit.type)
          && aUnit.countryName !== dUnit.countryName;
      });
      return _.map(filtered, (unit) => ({weapon, position: unit.position}));
    })
  );
};

export const calculateDamage = (aUnit, dUnit, aTerrainBonus, dTerrainBonus) => {
  console.log('aUnit:', aUnit, 'dUnit:', dUnit, 'aTerrainBonus:', aTerrainBonus, 'dTerrainBonus:', dTerrainBonus);
  let weaponIdx = aUnit.weapons[1] ? 1 : 0;
  let base = aUnit.weapons[weaponIdx].damageTo[dUnit.type];
  let aCO = 100;
  let aHP = Math.ceil(aUnit.hp / 10);
  let dCO = 100;
  let dHP = Math.ceil(dUnit.hp / 10);

  let dLoss = Math.floor([base * aCO / 100 + Math.floor(Math.random() * 9)] * (aHP / 10) * [(200 - (dCO + dTerrainBonus * dHP)) / 100]);

  if (dUnit.weapons
    && (dUnit.weapons[0].damageTo[aUnit.type] || dUnit.weapons[1].damageTo[aUnit.type])
    && dUnit.fireAfterMove
    && aUnit.weapons[0].range === 1) {

    dHP = Math.ceil((dUnit.hp - dLoss) / 10);
    let aLoss = Math.floor([base * dCO / 100 + Math.floor(Math.random() * 9)] * (dHP / 10) * [(200 - (aCO + aTerrainBonus * aHP)) / 100]);
    return [dLoss, aLoss];
  }
  return [dLoss, null];
}