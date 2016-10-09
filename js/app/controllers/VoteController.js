function VoteController() {
  this.votes = 0;
  this.voted = false;

  this.incrementVotes = function () {
    if(this.voted === false) {
      this.votes++;
      this.voted = true;
    }
  };

  this.decrementVotes = function () {
    if(this.voted === true) {
      this.votes--;
      this.voted = false;
    }
  };
}

angular
.module('app')
.controller('VoteController', VoteController);