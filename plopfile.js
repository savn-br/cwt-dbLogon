module.exports = function (plop) {
  // controller generator
  plop.setGenerator('partial', {
    description: 'create partial',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'partial name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/partials/{{ properCase name }}.vue',
        templateFile: 'plop-templates/components.hbs',
      },
    ],
  })
  plop.setGenerator('page', {
    description: 'create page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'pages/{{ dashCase name }}/index.vue',
        templateFile: 'plop-templates/components.hbs',
      },
    ],
  })
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
        path: 'components/{{ properCase name }}.vue',
        templateFile: 'plop-templates/components.hbs',
      },
    ],
  })
}
