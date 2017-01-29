Package.describe({
  name: 'brewhk:follower',
  version: '1.0.0',
  summary: 'Keeps track of who you follow, and who\'s following you.',
  git: 'https://github.com/brewhk/follower.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use(['ecmascript', 'check', 'mongo', 'aldeed:collection2@2.10.0']);
  api.mainModule('client/index.js', 'client');
  api.mainModule('server/index.js', 'server');
});
