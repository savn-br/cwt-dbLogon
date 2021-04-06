'use strict'

const faker = require('faker')
faker.locale = 'pt_BR'
faker.seed(123)

const systemAcronym = ['ACN', 'ASDR', 'RFG', 'WET']
const moduleAcronym = ['SFD', 'RWE', 'FGHF', 'ERT']
const transactionAcronym = ['TRE', 'TYRT', 'FGHGF', 'HFGH']
const profileType = ['new', 'pending', 'saved', 'authorized']
function generateAccess(data, max) {
  data.access = data.users.map((user, index) => {
    const status = new Array(max)
    for (let index = 0; index < max; index++) {
      status[index] = {
        date: faker.date.between('2020-01-01', '2020-12-31'),
        action: faker.lorem.sentence(),
      }
    }
    return {
      id: index + 1,
      data: { ...user, status },
    }
  })
  return data
}
function generateUsers(data, max) {
  for (let index = 0; index < max; index++) {
    data.users.push({
      id: index + 1,
      userId: (index + 1).toString(),
      employeeNumber: faker.finance.creditCardNumber('#########'),
      profileType: profileType[index % profileType.length],
      transactions:
        profileType[index % profileType.length] !== 'authorized'
          ? []
          : [1, 2, 3, 4, 5, 6, 7, 8],
      manager: faker.name.findName(),
      email: faker.internet.email(),
      userName: faker.name.findName(),
      password: '123456',
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
  return data
}
function generateMyProfile(data) {
  data.myProfile = data.users.map((user, index) => {
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
      profileName: 'Profile Access',
    }

    return { id: index + 1, data: { ...user, pointOfSales, profileAccess } }
  })
  return data
}

module.exports = () => {
  let data = {
    users: [],
    systems: [],
    modules: [],
    transactions: [],
    access: [],
    myProfile: [],
  }
  data = generateUsers(data, 14)
  data = generateAccess(data, 3)
  data = generateMyProfile(data)

  for (let index = 0; index < 4; index++) {
    data.systems.push({
      id: index + 1,
      acronym: systemAcronym[index],
      description: faker.lorem.sentence(),
      notes: faker.lorem.paragraph(),
      active: true,
    })
    data.modules.push({
      id: index + 1,
      acronym: moduleAcronym[index],
      description: faker.lorem.sentence(),
      notes: faker.lorem.paragraph(),
      active: true,
      systemId: index + 1,
    })
    data.transactions.push({
      id: index + 1,
      acronym: transactionAcronym[index],
      description: faker.lorem.sentence(),
      notes: faker.lorem.paragraph(),
      active: true,
      moduleId: index + 1,
    })
  }

  return data
}
