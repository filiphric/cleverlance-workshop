const clipboardy = require('clipboardy');

module.exports = (on, config) => {

  on('task', {
    getClipboard: () => {
      const clipboard = clipboardy.readSync();
      return clipboard;
    }

  })


}
