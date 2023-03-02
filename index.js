const core = require('@actions/core')
const { formatInTimeZone } = require('date-fns-tz')

async function run() {
  const time = formatInTimeZone(new Date(), core.getInput('timezone'), core.getInput('format'))
  console.log(`Formatted time: ${time}`)

  core.setOutput('time', time)
}

run()
