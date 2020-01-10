const rootImportOpts = {
  root: __dirname,
  rootPathPrefix: '~/',
  rootPathSuffix: 'src/',
};

module.exports = api => {
  api.cache(true);

  const plugins = [['babel-plugin-root-import', rootImportOpts]];

  return { plugins };
};
