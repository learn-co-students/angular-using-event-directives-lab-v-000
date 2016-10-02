function VoteController() {
    this.votes = 0;
    this.voted = true;

    this.incrementVotes = function () {
      // if (this.voted === false){
      //   this.votes++;
      //   this.voted = true;
      // }
      // else{
      //   this.votes--;
      //   this.voted = false;
      // }
      this.votes++;
    };

    this.decrementVotes = function () {
      // if(this.voted === true)
      // {
      //   this.votes--
      //   this.voted = false;
      // }
      this.votes--;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);