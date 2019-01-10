# MetaMask Bridge
[![Standard Code Style](https://img.shields.io/badge/codestyle-standard-brightgreen.svg)](https://github.com/standard/standard)

Use MetaMask with Node.js.

> :warning: Highly experimental!

## Demo

```
git clone git@github.com:harshjv/metamask-bridge.git
cd metamask-bridge
npm install
node index.js
open http://localhost:4000/
```

## Example

See [example.js](./example.js).


## API

## ethereum('enable')(callback)

```
ethereum('enable')((err, accounts) => {
  console.log('ethereum.enable', err, accounts)
})
```

## web3(methodName)(arguments)(callback)

> If `methodName` ends with '()', it will be treated like a function call.

```
web3('eth.getBlock()')(1)((err, block) => {
  console.log('web3.eth.getBlock(1)', err, block)
})

web3('eth.accounts')()((err, accounts) => {
  console.log('eth.accounts', err, accounts)
})
```

## License

MIT
