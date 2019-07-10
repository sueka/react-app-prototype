module.exports = {
  out: 'doc',
  ignoreCompilerErrors: true,
  excludeExternals: true,
  exclude: [
    '**/{*.,}{test,spec}.ts{x,}',
    'src/components/**/messages.ts',
    'src/{components,containers}/**/{*.,}stories.ts{x,}',
  ],
}