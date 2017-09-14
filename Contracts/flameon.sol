pragma solidity 0.4.16;
contract flameon {
    event Fire(uint8 data);
	function blast(uint8 x) {
    	Fire(x);	
	}
}
