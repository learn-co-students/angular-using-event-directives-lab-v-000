function VoteController() {
    this.votes = 0;

    this.incrementVotes = function () {
      this.votes++
    };

    this.decrementVotes = function () {
      this.votes--
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
