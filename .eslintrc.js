module.exports = {
  root: true,
  extends: ['@xotoboil-monorepo-turbo'],
  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
      },
    },
  ],
}
