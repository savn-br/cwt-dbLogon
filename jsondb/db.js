const faker = require('faker')
faker.locale = 'pt_BR'
faker.seed(123)

module.exports = () => {
  const data = { users: [], profiles: [] }
  for (let index = 0; index < 20; index++) {
    data.users.push({
      id: index + 1,
      register: index + 1,
      name: faker.name.findName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      phone: faker.phone.phoneNumber('119########'),
      card: faker.finance.creditCardNumber('##############'),
      company: faker.random.arrayElement([
        'Samsung',
        'Apple',
        'Microsoft',
        'Linux',
      ]),
      field: faker.random.arrayElement([
        'Contabilidade',
        'Almoxarifado',
        'Recursos humanos',
        'Tecnologia da informação',
      ]),
      role: faker.random.arrayElement([
        'QA',
        'Programador',
        'Analista de Ti',
        'PMO',
      ]),
      emergency: faker.random.boolean(),
      vip: faker.random.boolean(),
    })
  }
  return data
}
