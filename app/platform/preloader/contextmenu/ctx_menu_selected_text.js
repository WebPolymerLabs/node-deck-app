var remote = require('electron').remote;
var Menu = remote.Menu;
var MenuItem = remote.MenuItem;

module.exports = {
  template: function() {
    var platformUtils = require('../utils/main');
    
    return [
      {
        label: "Cut",
        role: 'cut',
      },
      {
        label: "Copy",
        role: 'copy',
      },
      {
        label: "Paste",
        role: 'paste',
      }
    ];
  },
  build: function() {
    return Menu.buildFromTemplate(this.template());
  },
};