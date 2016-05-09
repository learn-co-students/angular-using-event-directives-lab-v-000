function VoteController() {
    this.votes = 0;
    initialVotes = this.votes;

    this.incrementVotes = function () {
      if(this.votes < initialVotes + 1){
        this.votes++;
      }
    };

    this.decrementVotes = function () {
      if(this.votes > initialVotes - 1){
        this.votes--;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);