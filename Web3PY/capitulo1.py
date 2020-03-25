from web3 import Web3
infura_url = "https://mainnet.infura.io/v3/ef4d9142fb914a998dcabfcbddda8bdf"
web3 = Web3(Web3.HTTPProvider(infura_url))
print(web3.isConnected())
print(web3.eth.blockNumber)
balance = web3.eth.getBalance("0x9b9048A775927Cce0cc4A44A99C0267E46181748")
print(web3.fromWei(balance, "ether"))
