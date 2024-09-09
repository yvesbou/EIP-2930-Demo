const hre = require("hardhat");

async function main() {
  const [user] = await hre.ethers.getSigners();
  console.log(user.address);
  const data = "0xf4acc7b5"; // function selector for `callCalculator()`

  const Calculator = await hre.ethers.getContractFactory("Calculator");
  const calculatorDeployment = await Calculator.deploy();

  const calculator = await calculatorDeployment.waitForDeployment();

  const addressCalculator = await calculator.getAddress();
  console.log(`Calc contract deployed to ${addressCalculator}`);

  const Caller = await hre.ethers.getContractFactory("Caller");
  const callerDeployment = await Caller.deploy(addressCalculator);

  const caller = await callerDeployment.waitForDeployment();

  const addressCaller = await caller.getAddress();
  console.log(`caller contract deployed to ${addressCaller}`);

  const tx1 = {
    from: user.address,
    to: addressCaller,
    data: data,
    value: 0,
    type: 1,
    accessList: [
      {
        address: addressCalculator,
        storageKeys: [
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000000000000000000000000000000000000000000001",
        ],
      },
    ],
  };

  const tx2 = {
    from: user.address,
    to: addressCaller,
    data: data,
    value: 0,
  };

  console.log("==============  transaction with access list ==============");
  const txCall = await user.sendTransaction(tx1);

  const receipt = await txCall.wait();

  console.log(
    `gas cost for tx with access list: ${receipt.gasUsed.toString()}`
  );

  console.log("==============  transaction without access list ==============");
  const txCallNA = await user.sendTransaction(tx2);

  const receiptNA = await txCallNA.wait();

  console.log(
    `gas cost for tx without access list: ${receiptNA.gasUsed.toString()}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
