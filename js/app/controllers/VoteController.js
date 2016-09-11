function VoteController() {
    this.votes = 0;
    this.clicked = false;

    this.incrementVotes = function () {
    if (this.clicked === false){
      this.votes++;
      this.clicked = true;
      } else {
        alert("This has already clicked!");
      }
    };

    this.decrementVotes = function () {
    if (this.clicked === false){
      this.votes--;
      this.clicked = true;
      }else {
        alert("This has already clicked!");
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);