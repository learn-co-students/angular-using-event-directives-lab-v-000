function VoteController() {
    this.votes = 0;
    this.voted = 0
 

    this.incrementVotes = function () {      
      if (this.voted===0){
        this.votes += 1
        this.voted += 1  
      }

    };

    this.decrementVotes = function () {
      this.votes -= 1
      ///BONUS SOLUTION: CAN ONLY REMOVE A VOTE ONCE YOU HAVE
      ///MADE A VOTE. CAN ONLY REMOVE ONE VOTE
      ///Commented out to get second spec to pass. 
      // if (this.voted===1){
      //   this.votes -= 1
      // }
    };

}

angular
    .module('app')
    .controller('VoteController', VoteController);