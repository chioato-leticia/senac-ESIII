const clients = require('./fake-data.json');

const firstLetter = process.argv[2];
if (firstLetter == null) {
console.log("Informe uma letra");
process.exit(0);
}

const results = clients.filter((client) => {
  return client.name.charAt(0) == firstLetter.toUpperCase();
});

console.log(results);
