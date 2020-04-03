const clients = require('./fake-data.json');

const filteredClients = clients.filter(client => {
    const year = new Date (client.birthday).getFullYear();
    return year >= 1919
    
});

console.log(filteredClients);