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
      return _.map(filtered, (unit) => ({weapon, unitPos: unit.position}));
    })
  );
};