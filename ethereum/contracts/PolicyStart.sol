pragma solidity ^0.4.17;

import "./CrowdCoverageContract.sol";

contract PolicyStart is CrowdCoverageContract {
  // think about policy bidding and how that translates to policyProvider. 
  struct Policy {
    uint policyId;
    uint productId;
    string productName;
    uint productValue;
    uint requestedMaxClaim;
    mapping(address => uint) policyUser;
    mapping(address => uint) policyProvider;
  }
}