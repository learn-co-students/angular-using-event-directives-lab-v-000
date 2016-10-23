function VoteController() {
    this.votes = 0;
    var hasVoted = false;
    var hasRemovedVote = false;

    this.incrementVotes = function () {
      if(hasVoted == false) {
        this.votes++
        hasVoted = true;
      } else {
        this.votes--
        hasVoted = false;
      }
    };

    this.decrementVotes = function () {
      if(hasRemovedVote == false) {
        this.votes--
        hasRemovedVote = true;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
