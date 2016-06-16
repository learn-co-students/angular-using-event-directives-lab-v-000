function VoteController() {
  this.votes = 0;
  this.originalVotes = this.votes;

  this.incrementVotes = function () {
    if (this.votes === this.originalVotes) {
      this.votes++;
    } else {
      this.votes = this.originalVotes;
    }
  };

  this.decrementVotes = function () {
    if (this.votes === this.originalVotes) {
      this.votes--;
    } else {
      this.votes = this.originalVotes;
    }
  };
}

angular
  .module('app')
  .controller('VoteController', VoteController);