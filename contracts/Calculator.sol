// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Calculator {
    uint256 public x = 20;
    uint256 public y = 20;

    function getSum() public view returns (uint256) {
        return x + y;
    }
}

contract Caller {
    Calculator calculator;

    constructor(address _calc) {
        calculator = Calculator(_calc);
    }

    // call the getSum function in the calculator contract
    function callCalculator() public view returns (uint256 sum) {
        sum = calculator.getSum();
    }
}
