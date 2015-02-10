Package.describe({
  name: 'jamgold:bootstrap3panels',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Easy interface to create a bootstrap-3 panel-group',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jamgold/jamgold-bootstrap3panels.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1');
  api.export(['Bootstrap3Panel'], 'client');
  api.use(['templating','handlebars'], 'client');
  api.addFiles(['jamgold:bootstrap3panels.js','jamgold:bootstrap3panels.html'],'client');
});
