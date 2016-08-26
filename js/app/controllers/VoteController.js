function VoteController() {
    this.votes = 0;
    this.up = true;
    this.down = true;

    this.incrementVotes = function () {
      if (this.up == true) {
        this.votes++;
        this.up = false;
      } else {
        this.votes--;
        this.up = true;
      }
    };

    this.decrementVotes = function () {
      if (this.down == true) {
        this.votes--;
        this.down = false;
      } else {
        this.votes++;
        this.down = true;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
