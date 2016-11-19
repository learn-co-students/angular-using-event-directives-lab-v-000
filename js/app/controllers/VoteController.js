function VoteController() {
    this.votes = 0;
    this.voted = false;

    this.incrementVotes = function () {
      if (this.voted == true) {
        this.votes = 0;
      };
      this.votes++;
      this.voted = true;
    };

    this.decrementVotes = function () {
      if (this.voted == true) {
        this.votes = 0;
      };
      this.votes--;
      this.voted = true;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
