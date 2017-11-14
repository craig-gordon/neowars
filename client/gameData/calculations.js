import _ from 'lodash';

export const countTilesBetweenUnits = (pos1, pos2) => Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);

export const findAllTargetsInRange = (idx, unitList) => {
  let aUnit = unitList[idx];
  unitList.splice(idx, 1);
  return _.flatten(
    _.map(aUnit.weapons, (weapon) => {
      return _.filter(unitList, (dUnit) => {
        return countTilesBetweenUnits(aUnit.position, dUnit.position) <= weapon.range
          && weapon.damageTo.hasOwnProperty(dUnit.type)
          && aUnit.countryName !== dUnit.countryName;
      });
    })
  );
};

// [unit, unit, unit, unit, unit, unit]

// [{bazooka: [0, 0]}, {bazooka: [1, 1]}, {machine gun: [0, 0]}, {machine gun: [1, 1]}];