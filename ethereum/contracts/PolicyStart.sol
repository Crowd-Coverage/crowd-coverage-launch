pragma solidity ^0.4.17;

contract PolicyStart {
  // this starts the policy and then gets imported into the crowd coverage contract
  // think about policy bidding and how that translates to policyProvider. 
  struct Policy {
    uint policyId;
    uint productId;
    string productName;
    uint productValue;
    uint maxClaimAmount;
    mapping(address => uint) policyUser;
    mapping(address => uint) policyProvider;
    uint[] policies;
  }

  function startPolicy (
    uint _user, 
    uint _productId, 
    string _productName, 
    uint _productValue, 
    uint _maxClaimAmount
    ) internal {
    // this is where we can bring in the struct
    // check this method!!! Policy newPolicy = policies.push(policyUser[msg.sender]);
    
}