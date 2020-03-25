import json
from web3 import Web3
ganache_url = "http://127.0.0.1:7545"
web3 = Web3(Web3.HTTPProvider(ganache_url))

web3.eth.defaultAccount = web3.eth.accounts[0]


print(web3.isConnected())
abi = json.loads('[{"inputs":[],"name":"Greeter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"greeting","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}]')

address = web3.toChecksumAddress("0x61F7fFA60CC251Fb7d032CF3058cfA3c4144E643")
contract = web3.eth.contract(address=address, abi=abi)

print(contract.functions.greet().call())

tx_hash = contract.functions.setGreeting('Hello?, I just write this in atom IDE').transact()

web3.eth.waitForTransactionReceipt(tx_hash)
print('Update greeting: {}'.format(
contract.functions.greet().call()
))  
