const core = require('@actions/core')

async function run() {
  console.log(core.getInput('timezone'))
  console.log(core.getInput('format'))


  // updater.update(core.getInput('owner'), core.getInput('repo'), core.getInput('change-type'))
}

run()
