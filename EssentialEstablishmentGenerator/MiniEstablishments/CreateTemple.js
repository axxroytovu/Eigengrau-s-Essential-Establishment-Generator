/* global setup */
setup.createTemple = function (town, opts) {
  console.log('Creating a temple...')
  opts = opts || {}
  let temple = (opts['newBuilding'] || setup.createBuilding)(town, 'temple')
  var data = setup.templeData

  Object.assign(temple, {
    passageName: 'TempleOutput',
    initPassage: 'TempleOutput',
    BuildingType: 'temple',
    wordNoun: data.name.wordNoun.random(),
    priest: setup.createNPC({ dndClass: ['cleric', 'cleric', 'cleric', 'cleric', 'druid'].random(), background: ['acolyte', 'acolyte', 'acolyte', 'acolyte', 'sage', 'sage', 'sage'].random(), profession: 'priest' }),
    prayerSubject: data.prayerSubject.random(),
    dedicated: data.dedicated.random(),
    knownFor: data.knownFor.random(),
    guardedBy: data.guardedBy.random(),
    floorPlan: data.floorPlan.random(),
    complex: data.complex.random(),
    walls: data.walls.random(),
    interior: data.interior.random(),
    ceiling: data.ceiling.random(),
    rooms: data.rooms.random(),
    features: data.features.random()
  })

  temple.name = [
    'The ' + data.name.adjective.random().toUpperFirst() + ' ' + data.name.plural.random().toUpperFirst(),
    'The ' + temple.wordNoun.toUpperFirst() + ' of ' + data.name.soleNoun.random().toUpperFirst(),
    'The ' + temple.wordNoun.toUpperFirst() + ' of ' + data.name.adjective.random().toUpperFirst() + ' ' + data.name.plural.random().toUpperFirst(),
    setup.createName() + "'s " + temple.wordNoun.toUpperFirst(),
    setup.createName() + "'s " + data.name.soleNoun.random().toUpperFirst()
  ].random()

  var rollDataVariables = ['wealth', 'size', 'cleanliness']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(temple, data.rollData, propName)
  })
  temple.wealth = ''
  temple.size = ''
  temple.cleanliness = ''

  return temple
}
