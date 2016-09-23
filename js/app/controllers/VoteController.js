function VoteController() {
    this.votes = 0;
    var votesInit = this.votes;
    var voteUp = false;
    var voteDown = false;

    this.incrementVotes = function () {
      if (voteUp == false && voteDown == false) {
        this.votes++;
        voteUp = true;
        voteDown = false;
      } else if (voteUp == false && voteDown == true) {
        this.votes++;
        voteUp = true;
        voteDown = false;
      };
    };

    this.decrementVotes = function () {
      if (voteDown == false && voteUp == false) {
        this.votes--;
        voteDown = true;
        voteUp = false;
      } else if (voteDown == false && voteUp == true) {
        this.votes--;
        voteDown = true;
        voteUp = false;
      }
    }
}

angular
    .module('app')
    .controller('VoteController', VoteController);
