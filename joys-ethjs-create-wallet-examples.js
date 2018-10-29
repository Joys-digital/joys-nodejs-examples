// https://medium.com/@piyopiyo/generating-an-ethereum-wallet-with-an-existing-private-key-5cda690a8eb8

var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');

const privateKeyString = '0x61ce8b95ca5fd6f55cd97ac60817777bdf64f1670e903758ce53efc32c3dffeb';
const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);
const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
const publicKey = wallet.getPublicKeyString();
console.log(publicKey);

const address = wallet.getAddressString();
console.log(address);

const keystoreFilename = wallet.getV3Filename();
console.log(keystoreFilename);

const keystore = wallet.toV3("PASSWORD");
console.log(keystore);
