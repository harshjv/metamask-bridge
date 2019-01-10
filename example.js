module.exports = (ethereum, web3) => {
  ethereum('enable()')((err, accounts) => {
    console.log('ethereum.enable()', err, accounts)

    web3('eth.getBlock()')(1)((err, block) => {
      console.log('web3.eth.getBlock(1)', err, block)
    })

    web3('eth.accounts')()((err, accounts) => {
      console.log('eth.accounts', err, accounts)
    })
  })
}
