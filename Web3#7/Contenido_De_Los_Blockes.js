const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/ef4d9142fb914a998dcabfcbddda8bdf')

web3.eth.getBlockNumber().then(console.log)
