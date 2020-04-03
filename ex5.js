const clients = require('./fake-data.json');

const firstNameOnly = clients.map((client => client.name.split(" ")[0]))
console.log(firstNameOnly);