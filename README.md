# EIP-2930 Gas Comparison

```shell
# start a local chain
npx hardhat node
# execute script
npx hardhat run scripts/main.js --network localhost
```

Output

```
caller contract deployed to 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
==============  transaction with access list ==============
gas cost for tx with access list: 30934
==============  transaction without access list ==============
gas cost for tx without access list: 31234
```

### resources

- https://www.rareskills.io/post/eip-2930-optional-access-list-ethereum
- https://www.infura.io/blog/post/optimizing-ethereum-transactions-with-eth_createaccesslist

### created with hardhat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

run a script

```
npx hardhat run scripts/main.js
```
