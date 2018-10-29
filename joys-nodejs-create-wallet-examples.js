var hdkey = require('ethereumjs-wallet/hdkey');

var extPubKey = 'xpub6ERoQFMqiUoTXAL56JpQYLq5FyXaZypJiKdsAbHKzMUQsSiJTNSMnBtYYRXxda9C6fUx6mMMqatUDNFSKxxXcpBcpPkTqVwyethpWiQN8p5';

var hdwallet = hdkey.fromExtendedKey(extPubKey);
var wallet = hdwallet.getWallet();
var address = wallet.getAddress();

console.log(`Address: 0x${address.toString('hex')}`);
