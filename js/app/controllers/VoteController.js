function VoteController() {
    this.votes = 0;
    this.upvoted = false;
    this.downvoted = false;

    this.incrementVotes = function () {
    	if (!this.upvoted && !this.downvoted) {
    		this.votes += 1;
    		this.upvoted = true;
    	} else if (!this.upvoted && this.downvoted) {
    		this.votes += 1;
    		this.downvoted = false;
    	}
    };

    this.decrementVotes = function () {
    	if (!this.downvoted && !this.upvoted) {
    		this.votes -= 1;
    		this.downvoted = true;
    	} else if (!this.downvoted && this.upvoted) {
    		this.votes -= 1;
    		this.upvoted = false;
    	}
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);