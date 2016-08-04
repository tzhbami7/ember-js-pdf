/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-js-pdf',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + '/jspdf/dist/jspdf.min.js');
    app.import(app.bowerDirectory + '/jspdf-autotable/dist/jspdf.plugin.autotable.js');
  }
};
