function VoteController() {
    this.votes = 0;
    this.upVote = false;
    this.downVote = false;

    this.incrementVotes = function () {
      if (this.upVote === false) {
        this.votes ++;
        this.upVote = true;
      } else {
        this.votes --;
        this.upVote = false;
      }
    };

    this.decrementVotes = function () {
      if (this.downVote === false) {
        this.votes --;
        this.downVote = true;
      } else {
        this.votes ++;
        this.downVote = false;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
