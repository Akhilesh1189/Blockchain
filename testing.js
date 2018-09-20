console.log("====================================================");
var sleep = require('system-sleep');
var Web3 = require('web3'); 

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var coinBase = web3.eth.coinbase;
console.log("coinbase/Master account: " + coinBase) ;

if(!web3.isConnected())
    console.log('not connected to blockchain');
else
    console.log('connected to blockchain');

//Accessing a smart contract


console.log("====== Smart Contract operations =======");
web3.eth.defaultAccount=web3.eth.accounts[0] ;

var MyContract = web3.eth.contract([
  {
    "constant": false,
    "inputs": [
      {
        "name": "newSaying",
        "type": "string"
      }
    ],
    "name": "saySomethingElse",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "uint256"
      },
      {
        "name": "y",
        "type": "uint256"
      }
    ],
    "name": "sum",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "speak",
    "outputs": [
      {
        "name": "itSays",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]);

var myContractInstance = MyContract.at("0xc59f7aa4518f853c8e81e5433863ab28569a1f79");

//var response = myContractInstance.name();
//var total=  web3.toWei(amount.toString(), "ether");
//console.log('total details:',total);
var details=web3.eth.getTransaction('0x1d37b7e31779c63f828a93f30bb0d0690403432e9101fa36b059cd3c758bc30a');
var totalSum=myContractInstance.sum;
console.log('Total sum of number:',myContractInstance.sum(1,2));
var getDetails= myContractInstance.get();
var createWallte= web3.eth.createWallte('Akhilesh');
console.log('Create wallet:',createWallte);

console.log('Retrive details:',details,getDetails);

