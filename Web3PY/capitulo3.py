from web3 import Web3
ganache_url = "http://127.0.0.1:7545"
web3 = Web3(Web3.HTTPProvider(ganache_url))
# Public KEY is like an username
account_1 = "0x763f825Ca947Db2A45eFCbC335BB3B4D9393C949"
account_2 = "0x18a1C2b2e5da7D77913aF93Db30e3227f09827E4"
# Private Key is like a password
private_key1 = "fa29a65af2da490e037f68287aa27d79dbafec9325a6b9f797e6fc403d28cd0a"
private_key2 = "0721c249687948bcff513904a45841baff5af747a5cfa0a8cb0f558d0cfd16c4"
# Get the Nonce
nonce = web3.eth.getTransactionCount(account_1)
# Buil a transaction
tx = {
    'nonce': nonce,
    'to': account_2,
    'value': web3.toWei(1,'ether'),
    'gas': 2000000,
    'gasPrice': web3.toWei(50, 'gwei')
}
# Sign transaction
signed_tx = web3.eth.account.signTransaction(tx, private_key1)
# Send transaction
tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
print(web3.toHex(tx_hash))
# Get transaction HASH
