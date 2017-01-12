function VoteController() {
    this.votes = 0;
    this.votedUp = false;
    this.votedDown = false;
    // debugger;

    this.incremented = false;
    this.decremented = false;

    this.lastVote = '';

    this.incrementVotes = function () {

      // debugger;
      // if(this.votedUp === false) {
      //   this.votes++;
      //   this.votedUp = true;
      //   // this.votedDown = false;
      //   console.log("vote added")
      //   console.log(`votedUp = ${this.votedUp}, votedDown = ${this.votedDown}`)
      // } else {
      //   debugger;
      //   // this.votedUp = false;
      //   this.decrementVotes();
      //   // this.votedDown = true;
      //   // this.votedUp = false
      // }

      // if (!incremented) {
      //   debugger;
      // }
      if (!this.incremented) {
        this.votes++;
        this.incremented = true;
        this.decremented = false;
        this.lastVote = 'up'
        console.log("incremented part A")
        console.log("vote added")
        console.log(`incremented = ${this.incremented}, decremented = ${this.decremented}, last vote = ${this.lastVote}`)
      } else if (this.incremented) {
        // this.decrementVotes()
        // console.log("incremented part B")
        // console.log("reversed upvote")
        this.incremented = false;
        this.votes--;
      }
    };

    this.decrementVotes = function () {
      // debugger;
      // if(this.votedDown === false) {
      //   this.votes--;
      //   this.votedDown = true;
      //   // this.votedUp = false;
      //   console.log("vote taken away")
      //   console.log(`votedUp = ${this.votedUp}, votedDown = ${this.votedDown}`)
      // } else {
      //   debugger;
      //   this.incrementVotes();
      //   // this.votedUp = true;
      //   // this.votedDown = false;
      // }
      if (!this.decremented) {
        this.votes--;
        this.decremented = true;
        this.incremented = false;
        this.lastVote = 'down'
        console.log("decremented part A")
        console.log("vote taken away")
        console.log(`incremented = ${this.incremented}, decremented = ${this.decremented}, last vote = ${this.lastVote}`)
      } else if (this.decremented) {
        // this.incrementVotes()
        // console.log("decremented part B")
        // console.log('reversed downvote')
        this.decremented = false;
        this.votes++;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);