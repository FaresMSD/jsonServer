const { default: faker } = require('@faker-js/faker')




module.exports = () => {
    const data = {users: [],companies:[]}
    for (let i = 0; i < 1000; i++) {
        (i % 200 == 0 && data.companies.push({ id:faker.datatype.uuid(), name:faker.company.companyName()}) )
        data.users.push({ id: faker.datatype.uuid(), name: faker.name.findName(), image: faker.image.avatar(),companyId:[...data.companies].pop().id });
    }


    return data
}