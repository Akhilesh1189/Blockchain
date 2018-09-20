console.log("====================================================");
var sleep = require('system-sleep');
var Web3 = require('web3'); 

web3 = new Web3(new Web3.providers.HttpProvider("http://35.153.162.188:8545"));

var coinBase = web3.eth.coinbase;
console.log("coinbase/Master account: " + coinBase) ;

if(!web3.isConnected())
    console.log('not connected to blockchain');
else
    console.log('connected to blockchain');

//Accessing a smart contract
var abiArray = [{
     "constant": true,
      "inputs": [],
      "name": "getBuyPrice",
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
      "constant": false,
      "inputs": [
        {
          "name": "_newSellPrice",
          "type": "uint256"
        },
        {
          "name": "_newBuyPrice",
          "type": "uint256"
        }
      ],
      "name": "setPrices",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
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
      "constant": false,
      "inputs": [
        {
          "name": "_newConvRate",
          "type": "uint256"
        }
      ],
      "name": "setUSDARERate",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSellPrice",
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
      "name": "sellPrice",
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
      "name": "version",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getUSDARERate",
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
      "constant": false,
      "inputs": [
        {
          "name": "_target",
          "type": "address"
        },
        {
          "name": "_mintedAmount",
          "type": "uint256"
        }
      ],
      "name": "mintToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "buyPrice",
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
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "drain",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "buy",
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
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "sell",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "total_Supply",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
]

console.log("############====== Smart Contract operations =======############");
web3.eth.defaultAccount=coinBase ;
var accountsList=web3.eth.accounts;
console.log('Account List:',accountsList);
var MyContract = web3.eth.contract(abiArray);

var myContractInstance = MyContract.at("0x6f333abc13bb80738914bc5462211c080b7c51b7");

var response = myContractInstance.name();

console.log("Token buy price       : " + myContractInstance.getBuyPrice());

console.log("Token sell price       : " + myContractInstance.getSellPrice());

var response = myContractInstance.owner() ;

var tokenOwner = response ;
var userAccount2 = '0xe2b5660dae06a410e074f455d0fce74821fffb9d';
var userAccount1 = '0xcb12d6eeb472f25021500d92fe7cb543855eac42';

console.log("Token owner                    : " + tokenOwner);
//console.log("coinBase a/c                   : " + coinBase);
console.log("sharer a/c                       : " + userAccount1);
//console.log("seeker a/c                       : " + userAccount2);

response = myContractInstance.balanceOf(tokenOwner) ;
console.log("Token owner SAR balance        : " + response.toString(10));



response = myContractInstance.balanceOf(coinBase) ;
console.log("coinBase SAR balance           : " + response.toString(10));

var firstUserBalance = myContractInstance.balanceOf(userAccount1);
console.log("sharer a/c SAR balance           : " + firstUserBalance.toString(10));

//response = myContractInstance.balanceOf(userAccount2);
//console.log("seeker a/c SAR balance           : " + response.toString(10));

var balance = web3.eth.getBalance(tokenOwner);
console.log("Token owner ETH balance        : " + balance);

balance = web3.eth.getBalance(coinBase);
console.log("coinBase ETH balance           : " + balance);

balance = web3.eth.getBalance(userAccount1);
console.log("sharer A/c ETH balance           : " + balance);

//balance = web3.eth.getBalance(userAccount2);
//console.log("seeker A/c ETH balance           : " + balance);

console.log("---------------------------------------------*****************");
//web3.eth.defaultAccount= tokenOwner ;
console.log("---------------------------------------------********************");
//web3.personal.unlockAccount(web3.eth.defaultAccount,"", 15000)
//console.log("---------------------------------------------");

//console.log("Transferring some ARE tokens to Account1....");
web3.personal.unlockAccount(coinBase);
response = myContractInstance.transfer('0x2405ae06b36079b01cb45ad005cd82420767850d',10000000000000000000); //this will transfer the SAR userAccount.transfer(100);
//sleep(30*1000);
//console.log ("USD to ARE rate: " + myContractInstance.getUSDARERate())

//web3.eth.defaultAccount = userAccount1;
//web3.personal.unlockAccount(web3.eth.defaultAccount,"", 15000)
console.log('********************************#####*********************')
console.log('********************************########*********************')
console.log("***********error from here Please watch carefully***********");
//var estimatedGas1 = myContractInstance.sell.estimateGas(100);
//console.log("Estimated gas: " + estimatedGas1);

//web3.eth.defaultAccount='0xcb12d6eeb472f25021500d92fe7cb543855eac42';
/*web3.personal.unlockAccount('0xcb12d6eeb472f25021500d92fe7cb543855eac42','shareAroom',function(err,data)
{
  if(err)
    console.log('Could not unlock account:',error);
  console.log('account have been unlock:',data);
  myContractInstance.sell(100,function(error,data)
  {
    if(error)
      console.log('Sell function error',error)
    console.log('sell function executed success:',data);
  });
})*/

//console.log("transfer response : " + response);
console.log("Waiting for transfer to be completed.... ");
//sleep(30*1000);

response = myContractInstance.balanceOf(tokenOwner) ;
console.log("Post txn, token owner SAR balance: " + response.toString(10));
myContractInstance.sell(10,function(error,data)
  {
    if(error)
      console.log('Sell function error',error)
    console.log('sell function executed success:',data);
  });
myContractInstance.buy(function(error,data)
  {
    if(error)
      console.log('buy function error',error)
    console.log('buy function executed success:',data);
  });
//response = myContractInstance.balanceOf(coinBase) ;
//console.log("Post txn, coinBase SAR balance   : " + response.toString(10));

var userOnceBalance = myContractInstance.balanceOf(userAccount1);
console.log("Post Txn, sharer a/c SAR balance   : " + userOnceBalance.toString(10));

//response = myContractInstance.balanceOf(userAccount2);
//console.log("Post Txn, seeker a/c SAR balance   : " + response.toString(10));

balance = web3.eth.getBalance(tokenOwner);
/*console.log("Post Txn, Token owner ETH balance: " + balance);
myContractInstance.buy(function(error,data)
  {
    if(error)
      console.log('buy function error',error)
    console.log('buy function executed success:',data);
  });*/
//balance = web3.eth.getBalance(coinBase);
//console.log("Post Txn, coinBase ETH balance   : " + balance);

balance = web3.eth.getBalance(userAccount1);
console.log("Post Txn, sharer A/c ETH balance   : " + balance);

//balance = web3.eth.getBalance(userAccount2);
//console.log("Post Txn, seeker A/c ETH balance   : " + balance);
