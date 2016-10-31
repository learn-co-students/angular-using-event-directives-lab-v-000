function VoteController() {
    this.votes = 0;
    this.votedUp = false;
    this.votedDown = false;

    this.incrementVotes = function () {
      if (this.votedUp == true) {
        alert('You have already voted');
      }
      else {
        this.votes++;
        this.votedUp = true;
      }
    };

    this.decrementVotes = function () {
      if (this.votedDown == true) {
        alert('You have already voted');
      }
      else {
        this.votes--;
        this.votedDown = true;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
