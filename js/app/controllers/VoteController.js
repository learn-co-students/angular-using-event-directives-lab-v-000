function VoteController() {
    this.votes = 0;
    this.voted = false;
    this.decremented = false;

    this.incrementVotes = function () {
      if (this.voted){
        this.voted = false;
        this.votes--;
      } else {
        this.voted = true;
        this.votes++;
      }
    };

    this.decrementVotes = function () {
      if (this.decremented){
        this.decremented = false;
        this.votes++;
      } else {
        this.decremented = true;
        this.votes--;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);