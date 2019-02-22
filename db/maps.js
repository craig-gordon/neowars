const maps = [
  {
    name: `Sandalwood Plains`,
    height: 5,
    width: 5,
    board: [
      [
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'base', country: 'Ranford'},
        {terrain: 'base', country: 'Ranford'}
      ],
      [
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'base', country: 'Ranford'}
      ],
      [
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'}
      ],
      [
        {terrain: 'base', country: 'Floria'},
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'}
      ],
      [
        {terrain: 'base', country: 'Floria'},
        {terrain: 'base', country: 'Floria'},
        {terrain: 'plains'},
        {terrain: 'plains'},
        {terrain: 'plains'}
      ]
    ]
  },
  {
    name: `Folzor's Tundra`,
    height: 10,
    width: 10
  },
  {
    name: `Relic`,
    height: 20,
    width: 20
  }
];

module.exports = maps;