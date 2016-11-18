function VoteController() {
    this.votes = 0;
    var incrementClicked = false;
    var decrementClicked = false;

  this.incrementVotes = function () {
      if (incrementClicked == false) {
        this.votes++;
        incrementClicked = true;
      } else if (incrementClicked == true) {
        this.votes--;
        incrementClicked = false;
      }
    };

    this.decrementVotes = function () {
      if (decrementClicked == false) {
        this.votes--;
        decrementClicked = true;
      }
    };
  };


angular
    .module('app')
    .controller('VoteController', VoteController);
