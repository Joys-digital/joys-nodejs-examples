// NOTE !! Need run node from https://github.com/Joys-digital/joys-node-docker

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.getAccounts(function (error, result) {
    web3.eth.sendTransaction(
        {
            from: web3.eth.accounts[0],
            to: "0x56144ca5ea7e0406073ae393e4015b7f64170777",
            value: "1000000000000000000",
            data: "0xdf"
        }, function (err, transactionHash) {
            if (!err)
                console.log(transactionHash + " success");
        });
});
