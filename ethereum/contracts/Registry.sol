pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

// @title Register for contract names.
contract Registry is Ownable {
	struct Record {
		address contractAddress;
		string ipfsHash;
	}

	// publicly available register
	mapping (bytes32 => Record) public registry;

	// event for update function
	event RegistryUpdated(string _name, address _address, string _ipfsHash);

	// events for getting data into JS
	event GetRecord(string _name, address contractAddress, string ipfsHash);

	// get record from name
	function getRecord(string _name) public view returns(Record) {
		Record memory record = registry[keccak256(_name)];
		// return event so we can use JS
		GetRecord(_name, record.contractAddress, record.ipfsHash);
		return record;
	}

	// get address from name
	function getAddress(string _name) public view returns(address) {
		Record memory record = registry[keccak256(_name)];
		// return event so we can use JS
		GetRecord(_name, record.contractAddress, record.ipfsHash);
		return record.contractAddress;
	}

	// get ipfs hash from name
	function getIPFSHash(string _name) public view returns(string) {
		Record memory record = registry[keccak256(_name)];
		// return event so we can use JS
		GetRecord(_name, record.contractAddress, record.ipfsHash);
		return record.ipfsHash;
	}

	// update address for name, or create new name->address mapping
	function updateRegistry(string _name, address _address, string _ipfsHash) public onlyOwner {
		require(_address != address(0x0));
		registry[keccak256(_name)] = Record(_address, _ipfsHash);
		RegistryUpdated(_name, _address, _ipfsHash);
	}
}