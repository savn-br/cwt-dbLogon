const faker = require('faker')
faker.locale = 'pt_BR'
faker.seed(123)

module.exports = () => {
  const systemAcron = ['ACN', 'ASDR', 'RFG', 'WET']
  const moduleAcron = ['SFD', 'RWE', 'FGHF', 'ERT']
  const transactionAcron = ['TRE', 'TYRT', 'FGHGF', 'HFGH']
  const data = {
    users: [],
    profiles: [],
    systems: [],
    modules: [],
    transactions: [],
  }
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
  for (let index = 0; index < 4; index++) {
    data.systems.push({
      id: index + 1,
      acronym: systemAcron[index],
      description: faker.lorem.sentence(),
      notes: faker.lorem.paragraph(),
      active: true,
    })
    data.modules.push({
      id: index + 1,
      acronym: moduleAcron[index],
      description: faker.lorem.sentence(),
      notes: faker.lorem.paragraph(),
      active: true,
      system_id: index + 1,
    })
    data.transactions.push({
      id: index + 1,
      acronym: transactionAcron[index],
      description: faker.lorem.sentence(),
      notes: faker.lorem.paragraph(),
      active: true,
      module_id: index + 1,
    })
  }

  return data
}
