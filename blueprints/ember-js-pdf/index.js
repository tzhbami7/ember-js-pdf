module.exports = {
  description: 'Installation blueprint for ember-js-pdf',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('jspdf-autotable', '2.0.33');
  }
};
