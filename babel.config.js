module.exports = {
  // Definindo os presets do Babel
  presets: [
    // @babel/preset-env é usado para transpilar recursos do JavaScript moderno para versões compatíveis com o ambiente em execução
    ['@babel/preset-env', { targets: { node: 'current' } }],
    // @babel/preset-typescript é usado para transpilar código TypeScript para JavaScript
    '@babel/preset-typescript',
  ],
};
