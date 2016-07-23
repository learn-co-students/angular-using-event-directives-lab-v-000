function VoteController() {
    this.votes = 0;

    this.incrementVotes = function () {
      if (this.upvoted === 'true') {
        this.votes--;
        this.upvoted = 'false';
      } else {
        this.votes++;
        this.upvoted = 'true';
      }
    };

    this.decrementVotes = function () {
      if (this.downvoted === 'true') {
        this.votes++;
        this.downvoted = 'false';
      } else {
        this.votes--;
        this.downvoted = 'true';
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
