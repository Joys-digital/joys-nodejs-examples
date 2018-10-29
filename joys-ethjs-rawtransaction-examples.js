var Tx = require('ethereumjs-tx');

var privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')

var rawTx = {
 nonce: '0x00',
 gasPrice: '0x09184e72a000',
 gasLimit: '0x2710',
 to: '0x0000000000000000000000000000000000000000',
 value: '0x00',
 data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
}

var tx = new Tx(rawTx, 35855456); //  REQUIRED!, used to verify connection to the intended network (blockchain)
tx.sign(privateKey);
var serializedTx = tx.serialize();
console.log(serializedTx.toString('hex'));

//f889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f


var rpc = require("ethrpc");
var connectionConfiguration = {
  httpAddresses: ["http://localhost:8545"], // optional, default empty array
  wsAddresses: [], // optional, default empty array
  ipcAddresses: [], // optional, default empty array
  networkID: 35855456, //  REQUIRED!, used to verify connection to the intended network (blockchain)
  connectionTimeout: 3000, // optional, default 3000
  errorHandler: function (err) { /* out-of-band error */ }, // optional, used for errors that can't be correlated back to a request
};

rpc.connect(connectionConfiguration, function (err) {
  if (err) {
    console.error("Failed to connect to Ethereum node.");
  } else {
    console.log("Connected to Ethereum node!");
  }
});


rpc.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
  if (!err)
    console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
 });


