function VoteController() {
    this.votes = 0;
    this.add = 0;
    this.remove = 1;

    this.incrementVotes = function () {
      if (this.add%2 ===0){
        this.votes++;
        this.add++;
      }
    };

    this.decrementVotes = function () {
      if (this.remove === 1){
        this.votes--;
        this.remove--;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);