const clipboardy = require('clipboardy');

module.exports = async (on, config) => {

  on('task', {
    getClipboard: () => {
      const clipboard = clipboardy.readSync();
      return clipboard;
    },
  })

  require('cypress-grep/src/plugin')(config)

}
