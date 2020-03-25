const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/ef4d9142fb914a998dcabfcbddda8bdf')

// GAS PRICE
web3.eth.getGasPrice().then((result) =>
{
  console.log(web3.utils.fromWei(result, 'ether'))
})
