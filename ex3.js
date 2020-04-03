const clients = require('./fake-data.jason');

const fisrtLetter = process.argv[2]; 
if (fisrtLetter == null) {
console.log("Informe uma letra");
process.exit(0);
}

const result = clients.map(())