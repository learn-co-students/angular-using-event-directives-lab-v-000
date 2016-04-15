function VoteController() {
    this.votes = 0;
    this.increased = false;
    this.decreased = false;

    this.incrementVotes = function () {
      if (this.increased === false || this.votes === 0) {
        this.votes++;
        this.increased = true;
      } else {
        alert("You've already added a vote!");
      }
    };

    this.decrementVotes = function () {
      if (this.decreased === false || this.votes === 0) {
        this.votes--;
        this.decreased = true;
      } else {
        alert("You've already removed a vote!");
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);