// import ethereum web3 nodejs library
var Web3 = require('web3');
var web3 = new Web3();

// import GPIO nodejs library for hardware interaction through GPIO pins on raspberry pi
var Gpio = require('onoff').Gpio;
	var swth = new Gpio(17,'out');
	var iv; 

// set the web3 object local blockchain node
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

// log some web3 values
console.log(web3.version.api);
console.log(web3.isConnected());
console.log(web3.version.node);


//  set the ABI string 
var ABIString = JSON.parse('[{"constant":false,"inputs":[{"name":"x","type":"uint8"}],"name":"blast","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"data","type":"uint8"}],"name":"Fire","type":"event"}]');

// what contract are we going to interact with? CHANGE THIS
var ContractAddress = '0x';
web3.eth.defaultAccount = web3.eth.accounts[0];

// now retrieve your contract object with the ABI and contract address values
var flameshot = web3.eth.contract(ABI).at(ContractAddress);

console.log(flameshot);

var event = flameshot.Fire( {}, function(error, result) {
  if (!error) {
  	// when fire event happens, output the value 'data' from the result object and the block number
    var msg = "\n\n*********";
    msg += "Fire!: " + result.args.data + " (block:" + result.blockNumber + ")";
    msg += "*********";
    
    console.log(msg);
    
    
    //this will be different when using a servo vs my onoff switched thing
  
    //now loop the switch on for a half second, then off for half second

 // unleash hell
  iv = setInterval(function(){
	    swth.writeSync(swth.readSync() === 0 ? 1 : 0)
	}, 500);
   
	setTimeout(function() {
		    clearInterval(iv); // Stop motor
		    swth.writeSync(0); //Turn swth off
	}, 10000);
  }
});
