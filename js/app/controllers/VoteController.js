function VoteController() {
    this.votes = 5;
    this.alreadyUp = false;
    this.alreadyDown = false;

    this.incrementVotes = function () {
      if (!this.alreadyUp) {
        this.votes ++;
        this.alreadyUp = true;
        this.alreadyDown = false;
      } else {
        if (this.votes > 0) {
          this.votes --;
          this.alreadyUp = false;
        } else {
          return;
        }
      }
    };

    this.decrementVotes = function () {
      if (!this.alreadyDown) {
        if (this.votes > 0) {
          this.votes --;
          this.alreadyDown = true;
        } else {
          return;
        }

      } else {
        this.votes ++;
        this.alreadyDown = false;
        this.alreadyUp = true;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);