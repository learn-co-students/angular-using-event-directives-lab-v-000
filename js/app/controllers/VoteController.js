function VoteController() {
    this.votes = 0;

    this.incrementVotes = function () {
      this.votes += 1
    };

    this.decrementVotes = function () {
      this.votes -= 1
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);