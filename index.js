const faker = require('faker');

faker.locale = "pt_BR";

const mockedClients = [] ;

for (let i = 0 ; i < 1000; i++) {
    const client = {
       name: `${faker.name.firstName()} ${faker.name.lastName()}`,
       birthday: faker.date.between('1910','2019'),
       genre: faker.helpers.randomize(["F","M"]),
       lastpurchase: faker.date.between('2000','2020'),
       countpurchase: faker.random.number(100)
   }
    mockedClients.push(client);
    
}

console.log(mockedClients[0]);

