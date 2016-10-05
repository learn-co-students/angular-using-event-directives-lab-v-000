function VoteController() {

    this.votes = 0;
    var startingVote = this.votes;

    this.incrementVotes = function () {
      if(this.votes <= startingVote){
        this.votes+=1;
      }
    };

    this.decrementVotes = function () {
      if (this.votes >= startingVote){
        this.votes-=1;
      }

    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
