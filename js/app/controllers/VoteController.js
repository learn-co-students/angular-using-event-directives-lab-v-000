function VoteController() {
    this.votes = 0;
    this.turn = "on"

    this.incrementVotes = function () {
      if (this.turn == "on") {
        this.votes += 1
        this.turn = "off"
      }
    };

    this.decrementVotes = function () {
      if (this.turn == "off") {
        this.votes -= 1
        this.turn = "on"        
      }

    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);