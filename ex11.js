const clients = require('./fake-data.json');

const moreThanfifteen = clients.filter(client => client.countpurchase >= 15);

console.log(moreThanfifteen);