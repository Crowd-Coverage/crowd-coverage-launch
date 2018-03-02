pragma solidity ^0.4.17;

contract CrowdCoverageContract {
  struct Insured {
    mapping(address => uint) user;
    mapping(uint => uint) covrBalance;
  }
}