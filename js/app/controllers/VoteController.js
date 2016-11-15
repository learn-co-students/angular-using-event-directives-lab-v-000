function VoteController() {
    this.votes = 0;
    var firedOnce;

    this.incrementVotes = function () {
      firedOnce = firedOnce || false;
      if(firedOnce === false){ this.votes++ }
      firedOnce = true;
    };

    this.decrementVotes = function () {
      firedOnce = firedOnce || false;
      if(firedOnce === false){ this.votes-- }
      firedOnce = true;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
