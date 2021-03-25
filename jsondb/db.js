const faker = require('faker')
faker.locale = 'pt_BR'
faker.seed(123)

module.exports = () => {
  const systemAcron = ['ACN', 'ASDR', 'RFG', 'WET']
  const moduleAcron = ['SFD', 'RWE', 'FGHF', 'ERT']
  const transactionAcron = ['TRE', 'TYRT', 'FGHGF', 'HFGH']
  const profileType = ['new', 'collaborator', 'manager', 'admin', 'analyst']
  const data = {
    users: [],
    systems: [],
    modules: [],
    transactions: [],
    access: [],
    myProfile: [],
  }
  for (let index = 0; index < 20; index++) {
    data.users.push({
      id: index + 1,
      userId: index + 1,
      employeeNumber: faker.finance.creditCardNumber('#########'),
      profileType: profileType[index % profileType.length],
      name: faker.name.findName(),
      managerName: faker.name.findName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      phone: faker.phone.phoneNumber('119########'),
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
      emergencyFlag: faker.random.boolean(),
      vipFlag: faker.random.boolean(),
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
      systemId: index + 1,
    })
    data.transactions.push({
      id: index + 1,
      acronym: transactionAcron[index],
      description: faker.lorem.sentence(),
      notes: faker.lorem.paragraph(),
      active: true,
      moduleId: index + 1,
    })
    data.access = data.users.map((user) => {
      const max = 3
      const status = new Array(max)
      for (let index = 0; index < max; index++) {
        status[index] = {
          date: faker.date.between('2020-01-01', '2020-12-31'),
          action: faker.lorem.sentence(),
        }
      }
      return {
        ...user,
        status,
      }
    })
    data.myProfile = data.users.map((user) => {
      const pointOfSales = new Array(3)
      const system = new Array(3)
      const module = new Array(2)
      const transaction = new Array(2)

      for (let index = 0; index < transaction.length; index++) {
        transaction[index] = {
          transaction: faker.lorem.words(5),
          notes: faker.lorem.words(5),
          active: faker.random.boolean(),
        }
      }

      for (let index = 0; index < module.length; index++) {
        module[index] = {
          module: faker.lorem.words(5),
          notes: faker.lorem.words(5),
          active: faker.random.boolean(),
          transaction,
        }
      }

      for (let index = 0; index < system.length; index++) {
        system[index] = {
          system: faker.lorem.words(5),
          notes: faker.lorem.words(5),
          active: faker.random.boolean(),
          module,
        }
      }

      for (let index = 0; index < pointOfSales.length; index++) {
        pointOfSales[index] = { name: faker.lorem.words(4) }
      }

      const profileAccess = {
        details: system,
        profileName: faker.lorem.words(5),
      }

      return { ...user, pointOfSales, profileAccess }
    })
  }

  return data
}
