# STOP! THIS PROJECT POSES EXTREME RISK OF INJURY, FIRE, DEATH, AND PROPERTY LOSS. DO NOT ATTEMPT TO BUILD THIS

You can support this project by purchasing Pumpkin Spice Token (🎃PSL), They are not used in the project but they do buy me coffee.
http://tokenmint.io/#/ico/0xd3492661ff32e1be61f087f5a7901ecb5d5cbfc4


# Smart contract controlled IOT Flame shooting pumpkin

![How it Works](https://github.com/realcodywburns/flameOn/blob/master/fire.png)

### Abstract:
This project is a demonstration of using a blockchain layer to host IoT applications for real world deployment.This code can be modified to interact with any device capable of reaching the internet.

![Workflow](https://github.com/realcodywburns/flameOn/blob/master/pumpkinblocks2.png)

### Overview

1) A single page web application is hosted on IPFS and is the interaction point for users. On the page, web3 is used to fetch various public items from the smart contract such as status, cost to fire(C2F), number of times fired, etc. A qr code is displayed with a URI formated to set the proper price(from the C2F) and a contract address. The user scans and sends the ETC to the contract.

2) Web3 routes the api call to a public api point. This system is currently set up to ues the mewapi point.

3) The contract is paid the incoming ETC. It verifies that the amount is above the current C2F and if so it will send a fire event.

4) The raspberry pi 2 is running a parity node running in light mode. It monitors the contract address and watches for a `fire` event. When that happens it toggles `Gpiopin17` off and on and sends a `I fired` event to the contract.

5) The contract is updated directly from the R-Pi as it is the owner of the contract. It has the abality to change its status(online and offline) and report events. 


### Basic Requirements:

- Raspberry Pi 2
- Servo
- Aerosol can
- A pumpkin
- Parity


### (WIP)

BlockChain:
`parity --light --chain=classic`

Modules:
`npm install inout web3` 

Install `parity`  

