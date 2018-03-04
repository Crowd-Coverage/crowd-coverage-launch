pragma solidity ^0.4.17;

// import approved policy here 

import './PolicyStart.sol';

contract CrowdCoverageContract {
  struct Insured {
    mapping(address => uint) user;
    mapping(uint => uint) covrBalance;
  }

  function getApprovedPolicy() public returns (uint) {
    // this could be the function to get approved policies 
  }
}