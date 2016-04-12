function VoteController() {
    this.votes = 0;
    this.direction = '';

    this.incrementVotes = function () {
    	if (this.direction != 'up'){
	    	this.votes++;
	    	this.direction = 'up';
	    }
    };

    this.decrementVotes = function () {
    	if (this.direction != 'down'){
	    	this.votes--;
	    	this.direction = 'down';
	    }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);