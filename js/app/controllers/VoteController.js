function VoteController() {
    this.votes    = 0;
    var boolean   = false;
    
    this.incrementVotes = function () {
      boolean = !boolean;
      (boolean) ? this.votes++ : null;
    };

    this.decrementVotes = function () {
      boolean = !boolean;
      (boolean) ? this.votes-- : null;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);