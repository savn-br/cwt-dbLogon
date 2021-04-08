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
  plop.setGenerator('i18n', {
    description: 'add a new term i18n',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'term name please',
      },
      {
        type: 'input',
        name: 'brName',
        message: 'Brazilian expression',
      },
      {
        type: 'input',
        name: 'enName',
        message: 'English expression',
      },
    ],
    actions: [
      {
        type: 'append',
        path: 'i18n/br.js',
        pattern: `/* PLOP_APPEND_BR */`,
        template: `  {{camelCase name}}: '{{brName}}',`,
      },
      {
        type: 'append',
        path: 'i18n/en.js',
        pattern: `/* PLOP_APPEND_EN */`,
        template: `  {{camelCase name}}: '{{enName}}',`,
      },
    ],
  })
}
