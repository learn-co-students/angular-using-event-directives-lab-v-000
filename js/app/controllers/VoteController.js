function VoteController() {
    this.votes = 5;
    var counter = 1

    this.incrementVotes = function () {
      if (counter < 2) {
        this.votes++;
        counter++;
      }
    };

    this.decrementVotes = function () {
      if (counter > 0) {
        this.votes--;
        counter--;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
