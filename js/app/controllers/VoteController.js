function VoteController() {
    this.votes = 0;

    this.incrementVotes = function () {
      this.votes++;
       if (this.votes >= this.votes +1) {
        this.votes = 0;
      }
    };

    this.decrementVotes = function () {
      this.votes--;
      if (this.votes <= this.votes -1) {
        this.votes = 0;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);