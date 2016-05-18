function VoteController() {

    this.baseVotes = 5;
    this.myVote = 0;

    this.addVotes = function(){
      this.votes = this.baseVotes + this.myVote;
    };

    this.addVotes();

    this.incrementVotes = function () {
      this.myVote = 1;
      this.addVotes();
    };

    this.decrementVotes = function () {
      this.myVote = -1;
      this.addVotes();
    };

    this.removeVotes = function(){
      this.myVote = 0;
      this.addVotes();
    };

}

angular
    .module('app')
    .controller('VoteController', VoteController);
