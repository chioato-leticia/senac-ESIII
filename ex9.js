const clients = require('./fake-data.json');

const totalPurchases = clients.map(client => client.countpurchase).reduce((sum, next) => (sum += next));

console.log(totalPurchases);