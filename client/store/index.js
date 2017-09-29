const store = Redux.createStore(rootReducer);

storeBlueprint = {
  gameName: 'BATTLE OF THE CENTURY',
  map: 'Sandalwood Plains',
  day: 1,
  currentTurn: 'Floria',
  
  Board: [
    [
      {
        terrain: 'P',
        currentUnit: null,
        capturePoints: null,
        ownedBy: null
      },
    ],
    [
      {
        terrain: 'P',
        currentUnit: null,
        capturePoints: null,
        ownedBy: null
      },
    ]
  ],
  
  Countries: [
    {
      Name: 'Floria',
      Funds: 5000,
      Income: 5000,
      Units: [
        {
          Type: 'antiair',
          HP: 100,
          Ammo: 9,
          Fuel: 60,
          Position: [0, 0]
        },
      ]
    },
  ]
};