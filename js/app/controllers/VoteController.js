function VoteController() {
    this.votes = 0;

    this.incrementVotes = function () {
      this.votes ===0 ? this.votes++ : this.votes--;
      if (this.votes ===2 ){
          this.votes--;
      }
    };

    this.decrementVotes = function () {
      this.votes ===-1 ? this.votes++ : this.votes--;
      if(this.votes ===1){
        this.votes--;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
