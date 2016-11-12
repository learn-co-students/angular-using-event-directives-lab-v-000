function VoteController() {
    this.votes = 0;
    var voteOnce = this.votes;

    this.incrementVotes = function () {
      if (this.votes <= voteOnce) {
        this.votes ++;
      }
    };

    this.decrementVotes = function () {
      if (this.votes >= voteOnce) {
        this.votes --;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
