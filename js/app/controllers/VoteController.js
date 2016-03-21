function VoteController() {
    this.votes = 0;

    this.incrementVotes = function () {
    	if (this.votes <= 0)
    		this.votes++;
    };

    this.decrementVotes = function () {
    	if (this.votes >= 0)
    		this.votes--;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);