var Web3=require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3.eth.accounts);


geth --testnet --syncmode="fast" --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303" --rpc --rpcapi "db,eth,net,web3,personal"--rpcport=8545 --rpccorsdomain '*' --rpcaddr 54.242.253.246 --networkid=3 console
geth --testnet --syncmode="fast" --bootnodes "enode://20c9ad97c081d63397d7b685a412227a40e23c8bdc6688c6f37e97cfbc22d2b4d1db1510d8f61e6a8866ad7f0e17c02b14182d37ea7c3c8b9c2683aeb6b733a1@52.169.14.227:30303,enode://6ce05930c72abc632c58e2e4324f7c7ea478cec0ed4fa2528982cf34483094e9cbc9216e7aa349691242576d552a2a56aaeae426c5303ded677ce455ba1acd9d@13.84.180.240:30303" --rpc --rpcapi "db,eth,net,web3,personal"--rpcport=8545 --rpccorsdomain '*' --rpcaddr 54.242.253.246 --networkid=3 console


geth --testnet --fast --rpc --rpcapi="db,eth,net,web3,personal,web3" --rpccorsdomain '*' --rpcaddr="0.0.0.0" --rpcapi "web"  --networkid=3 console
ssh -X "web3Connection.pem" ubuntu@ec2-54-242-253-246.compute-1.amazonaws.com 
geth --testnet --syncmode="fast" --rpc --rpcapi "db,eth,net,web3,personal"--rpcport=8545 --rpccorsdomain '*' --rpcaddr 10.0.0.238 --networkid=3 console


geth attach /home/ubuntu/.ethereum/testnet/geth.ipc
/home/ubuntu/.ethereum/testnet/geth.ipc 
