function VoteController() {
    this.votes = 0;
		var upVoteFlag = false;
		var downVoteFlag = false;

    this.incrementVotes = function () {
			if ( upVoteFlag == false ) {
				this.votes = this.votes + 1;
				upVoteFlag = true;
				downVoteFlag = false;
			}
    };

    this.decrementVotes = function () {
			if ( downVoteFlag == false ) {
				this.votes = this.votes - 1;
				upVoteFlag = false;
				downVoteFlag = true;
			}
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
