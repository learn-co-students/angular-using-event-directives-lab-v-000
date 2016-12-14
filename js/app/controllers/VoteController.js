function VoteController() {
    this.upVoted = false;
    this.downVoted = false;
    this.votes = 0;

    this.incrementVotes = function () {
      if (!this.upVoted) {
        this.votes++;
        this.upVoted = true;
      }
    };

    this.decrementVotes = function () {
      if (!this.downVoted) {
        this.votes--;
        this.downVoted = true;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
