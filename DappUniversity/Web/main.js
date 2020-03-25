const Web3 = require('web3')
const EthereumTx = require('ethereumjs-tx')
const solc = require('solc')
const fs = require('fs')

const url = 'https://mainnet.infura.io/v3/ef4d9142fb914a998dcabfcbddda8bdf'

const web3 = new Web3(url)
const myAddress = '0x763f825Ca947Db2A45eFCbC335BB3B4D9393C949'
const myAddressKey = Buffer.from('fa29a65af2da490e037f68287aa27d79dbafec9325a6b9f797e6fc403d28cd0a','hex')

const myAddress2 = '0x18a1C2b2e5da7D77913aF93Db30e3227f09827E4'
const myAddressKey2 = Buffer.from('0721c249687948bcff513904a45841baff5af747a5cfa0a8cb0f558d0cfd16c4','hex')

const content = fs.readFileSync('coches.sol').toString() // Guarda en content un string que contiene todo nuestron contrato
var objectSolc =
{
  //Entradas
  language: 'Solidity',
  sources:
  {
    'coches':
    {
      content: content
    }
  },
  // Salidas
  settings:
  {
    outPutSelection:
    {
      '*':
      {
        '*': ['*']
      }
    }
  }
}
const output = JSON.pase(solc.compile(JSON.stringfy(objectSolc))) // Almacenamos en formato JSON el retorno de la compilacion de nuestro smart Contract
const byteCodeContract = output.contracts.coches.Token.evm.bytecode.object
const nonce = web3.eth.getTransactionCount(myAddress, (err, txCount) =>
{
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: null,
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('2', 'gwei')),
    data: '0x' + byteCodeContract

  }
  // Firma
  const tx = EthereumTx(txObject)
  tx.sign(myAddressKey)

  const serializedTx = tx.serialize().toString('hex') // Convierte un objeto de java script a un objeto que se pueda enviar por internet
  web3.eth.sendSignedTransaction('0x' + serializedTx).on('receipt', receipt => {
    console.log('Contrato subido: ' + receipt.contractAddress)
  })


})
