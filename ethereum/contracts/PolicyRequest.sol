pragma solidity ^0.4.17;

contract PolicyRequest {
  struct PolicyRequest {
    string description;
    uint value;
    address beneficiary;
    bool complete;
    uint approvalCount;
    mapping(address => bool) approvals;
  }

  /* I believe that the approvers will have wallets stocked with COVR ---> Need to look at those mechanics
   Approval process should happen here to keep the contract simple, but will consider separating out that contract */
}