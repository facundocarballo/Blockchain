var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/ws/v3/ef4d9142fb914a998dcabfcbddda8bdf')

const account1 = '0x763f825Ca947Db2A45eFCbC335BB3B4D9393C949'
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {

// Get the Smart Contract Data
const data = '0x60806040526040518060400160405280600a81526020017f4461707020546f6b656e000000000000000000000000000000000000000000008152506000908051906020019061004f92919061010a565b506040518060400160405280600481526020017f44415050000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061010a565b5060126002553480156100ad57600080fd5b50600254600a0a620f424002600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506101af565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014b57805160ff1916838001178555610179565b82800160010185558215610179579182015b8281111561017857825182559160200191906001019061015d565b5b509050610186919061018a565b5090565b6101ac91905b808211156101a8576000816000905550600101610190565b5090565b90565b610adf806101be6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461022557806370a082311461024357806395d89b411461029b578063a9059cbb1461031e578063dd62ed3e1461038457610093565b806306fdde0314610098578063095ea7b31461011b57806318160ddd1461018157806323b872dd1461019f575b600080fd5b6100a06103fc565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101676004803603604081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061049a565b604051808215151515815260200191505060405180910390f35b6101896105c5565b6040518082815260200191505060405180910390f35b61020b600480360360608110156101b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105cb565b604051808215151515815260200191505060405180910390f35b61022d6107b7565b6040518082815260200191505060405180910390f35b6102856004803603602081101561025957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107bd565b6040518082815260200191505060405180910390f35b6102a36107d5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102e35780820151818401526020810190506102c8565b50505050905090810190601f1680156103105780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61036a6004803603604081101561033457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610873565b604051808215151515815260200191505060405180910390f35b6103e66004803603604081101561039a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108d6565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104925780601f1061046757610100808354040283529160200191610492565b820191906000526020600020905b81548152906001019060200180831161047557829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104d557600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60035481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561061957600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156106a257600080fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107ac8484846108fb565b600190509392505050565b60025481565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561086b5780601f106108405761010080835404028352916020019161086b565b820191906000526020600020905b81548152906001019060200180831161084e57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156108c157600080fd5b6108cc3384846108fb565b6001905092915050565b6005602052816000526040600020602052806000526040600020600091509150505481565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561093557600080fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a350505056fea2646970667358221220cfe4d7659480c297934c66c8a4f24b2c49795d1e173969e1818df0ba38b3f85464736f6c63430006040033'

// Create the Transaction
const txObject = {
  nonce: web3.utils.toHex(txCount), // Nonce = El numero de veces que escribio transaciones
  gasLimit: web3.utils.toHex(1000000),
  gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
  data: data
}

// Sign the Transaction
const tx = new Tx(txObject)
tx.sign(privateKey1)
const serializedTx = tx.serialize()
const raw = '0x' + serializedTx.toString('hex')

// Brodcast the Transaction
web3.eth.sendSignedTransaction(raw, (err, txHash) => {
  console.log('err: ', err, 'txHash:', txHash)
  // Use this txHash to find the contract in EtherScan
})
})
