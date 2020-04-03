const moment = require("moment");
const clients = require('./fake-data.json');

const filteredClient =  clients.filter(client => {
  const currentDate = moment();
  const clientDate = moment(client.lastpurchase);
 
  return currentDate.diff(clientDate, 'years') >= 1;
});

console.log(filteredClient);