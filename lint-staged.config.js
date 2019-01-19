module.exports = {
  linters: {
    '**/*.+(js|ts|html|css|sass|less|graphql|yml|yaml|scss|vue)': [
      'eslint --fix',
      'prettier --write',
      'git add',
    ],
  },
}
