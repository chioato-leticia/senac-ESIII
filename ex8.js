const clients = require('./fake-data.json');

const name = process.argv[2];
if (name == null){
console.log("Informe um Nome");
process.exit(0);
}


const filteredClient = clients.filter(client => client.name.toLowerCase().includes(name.toLowerCase()));

console.log(filteredClient);