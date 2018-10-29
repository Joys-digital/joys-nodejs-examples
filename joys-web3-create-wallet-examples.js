// NOTE !! Need run node from https://github.com/Joys-digital/joys-node-docker

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


wallet = web3.eth.accounts.create();
console.log(wallet);


