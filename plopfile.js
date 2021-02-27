module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{name}}.vue',
        templateFile: 'plop-templates/components.hbs',
      },
    ],
  })
}
