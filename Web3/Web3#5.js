var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/ef4d9142fb914a998dcabfcbddda8bdf')
const account1 = '0x11Ac10C860B127eAcdc4553b864b5a0Ab91c8f1F'
const account2 = '0xB644515De5D14E6FE1E99B12D733bEe7127cd920'
const privateKey1 = '0x9e7b9199bd7b326826d983752f4855fc11412a496e3a41240a0bd0326bd74440'
const ke2 = '0x64c0a3b960d39d0fdb28625ab4572fd327ba841c23c7fb9cb07b02520ad9f969'


const contractAddress = web3.eth.contract.address()

const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

const tokenContract = new web3.eth.Contract(contractABI, contractAddress)
const data = tokenContract.methods.transfer(account2, 1000).encodeABI()



web3.eth.getTransactionCount(account1, (err, txCount)=>
{


    // Create Transaction
    const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: contractAddress,
    data: data,
    }
    // Sign Transaction
    const tx = new Tx(txObject)
    tx.sign(privateKey1)
    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    // Brodcast Transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err: ', err, 'txHash:', txHash)
      // Use this txHash to find the contract in EtherScan
    })

})
