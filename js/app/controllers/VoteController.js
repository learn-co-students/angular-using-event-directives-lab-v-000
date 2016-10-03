function VoteController() {
    vc = this;
    vc.votes = 0;

    this.incrementVotes = function () {
      vc.votes++;
    };

    this.decrementVotes = function () {
      vc.votes--;      
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);