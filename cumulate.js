const path = require('path'),
  fs = require('fs'),
  dataPath = path.join(__dirname, 'data'),
  headsCoHeads = require(path.join(dataPath, 'headsCoHeads.json'))

const events = name => require(path.join(dataPath, name + '.json'))
const data = JSON.stringify({
  tech: [
    ['cpit', 'KeyCoders'],
    ['civil', 'SkyScrapers'],
    ['etel', 'Embeddrones'],
    ['mech', 'Machinists'],
    ['prod', 'FabFacturers'],
    ['ee', 'Rezonizers']
  ].map(([name, alias]) => ({
    name,
    alias,
    heads: headsCoHeads[name].heads,
    coHeads: headsCoHeads[name].coHeads,
    events: events(name)
  })),
  nonTech: events('nonTech'),
  cultural: events('cultural')
})

fs.writeFileSync(path.join(dataPath, 'data.json'), data)
fs.writeFileSync(path.join(dataPath, 'data.min.js'), 'data=' + data)

console.log('Done.')
