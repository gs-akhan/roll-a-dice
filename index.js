#!/usr/bin/env node
 
function RollADice() {
	this.cheatValue = void 0;
}

var _proto = RollADice.prototype;

_proto.cheat = function(cheatValue) {
	if(+cheatValue && +cheatValue <= 6) {
		this.cheatValue = cheatValue;
	}
	else {
		this.cheatValue = void 0;	
	}

	return this;
};

_proto.fair = function() {
	this.cheatValue = void 0;
	return this;
};

_proto.roll = function() {
	if(this.cheatValue) {
		return this.cheatValue;
	}
	return random(1, 6);
};

function random(min, max) {
	if (max === null) {
	  max = min;
	  min = 0;
	}
	return min + Math.floor(Math.random() * (max - min + 1));
}

module.exports = RollADice;
