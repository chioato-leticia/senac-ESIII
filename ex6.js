const clients = require('./fake-data.json');

const fisrtLetter = process.argv[2];
if (fisrtLetter == null){
console.log("Informe uma letra");
process.exit(0);
}
const filteredClients = clients.filter((client) => {
    if (client.name.charAt(0) == firstLetter.toUpperCase()){
        return client.name.split(" ") [0]
    }
    
    })
console.log(filteredClients); 