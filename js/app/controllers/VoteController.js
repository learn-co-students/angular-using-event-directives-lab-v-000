function VoteController() {
    this.votes = 0;
    this.voteAdded = 0;
    this.voteRemoved = 0;

    this.incrementVotes = function () {
      if (this.voteAdded === 0) {
        // user has not incremented vote
        this.votes++;
        this.voteAdded++;  
      } else {
        // user has previously incremented vote
        this.votes--;
        this.voteAdded--; 
        alert("You can only add one vote. We will remove your previously added vote.");
      }
    };

    this.decrementVotes = function () {
      if (this.voteRemoved === 0) {
        // user has not decremented vote
        this.votes--;
        this.voteRemoved++;  
      } else {
        // user has previously decremented vote
        this.votes++;
        this.voteRemoved--;
        alert("You can only remove one vote. We will add back your previously removed vote.");
      }
    };
      
}

angular
    .module('app')
    .controller('VoteController', VoteController);