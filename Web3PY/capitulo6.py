import json
from web3 import Web3
infura_url = "https://mainnet.infura.io/v3/ef4d9142fb914a998dcabfcbddda8bdf"
web3 = Web3(Web3.HTTPProvider(infura_url))

latestBlock = web3.eth.blockNumber
print(latestBlock)
# This show you the content of the last block in the Ethereum blockchain

#print(web3.eth.getBlock(latestBlock))

#for i in range(0,10):
#    print(web3.eth.getBlock(latestBlock - i))

hash = '0xa6cb2d07886f7d7d7818ce185849e6cc9944f978a1aa0005773fd0313e05dcb6'
print(web3.eth.getTransactionByBlock(hash, 2))
