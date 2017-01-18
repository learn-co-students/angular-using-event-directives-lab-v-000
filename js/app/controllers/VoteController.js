function VoteController() {
    this.votes = 0;

    this.incremented = false;
    this.decremented = false;

    // currently a little wonky.. if you click upvote once, then downvote, the next downvote goes back up to 1
    this.incrementVotes = function () {
      if (!this.incremented) {
        this.votes++;
        this.incremented = true;
        this.decremented = false;
      } else if (this.incremented) {
        this.incremented = false;
        this.votes--;
      }
    };

    this.decrementVotes = function () {
      if (!this.decremented) {
        this.votes--;
        this.decremented = true;
        this.incremented = false;
      } else if (this.decremented) {
        this.decremented = false;
        this.votes++;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);