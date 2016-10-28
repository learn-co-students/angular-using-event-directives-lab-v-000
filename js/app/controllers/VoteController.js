function VoteController() {
  var vc = this;
  vc.votes = 0;

  vc.incrementVotes = function () {
    vc.votes ++;
  };

  vc.decrementVotes = function () {
    vc.votes --;
  };
}

angular
    .module('app')
    .controller('VoteController', VoteController);