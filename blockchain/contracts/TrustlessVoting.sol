// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TrustlessVoting is Ownable {
    mapping(uint => uint) public votesCounter;
    mapping(address => uint) public votes;

    function vote(uint option) public {
        require(votes[_msgSender()] == 0, "This address has already been voted");
        votes[_msgSender()] = option;
        votesCounter[option] = votesCounter[option] + 1;
    }

    function results(uint maxOption) public view returns(uint[] memory) {
        uint[] memory _results = new uint[](maxOption);
        for (uint i = 0; i < maxOption; i++) {
            _results[i] = votesCounter[i + 1];
        }
        return _results;
    }
}
