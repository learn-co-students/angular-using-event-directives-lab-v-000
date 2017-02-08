function VoteController() {
    this.votes = 0;
    this.toggle = false;

    this.incrementVotes = function () {
      if (this.toggle === false) {
        this.votes ++
        this.toggle = true
      } else {
        this.votes --
        this.toggle = false
      }
    };

    this.decrementVotes = function () {
      if (this.toggle === false) {
        this.votes --
        this.toggle = true
      } else {
        this.votes ++
        this.toggle = false
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
