function VoteController() {
    this.votes = 5;
    this.decrementBool = false;
    this.incrementBool = false;

    this.incrementVotes = function () {
      if(this.incrementBool === false){
        this.votes++;
        if(this.decrementBool === true ){
          this.decrementBool = false;
          this.incrementBool = false;
        }
        else{
          this.incrementBool = true;
        }
      }
    };

    this.decrementVotes = function () {
      if (this.decrementBool === false){
        this.votes--;
        if(this.incrementBool === true){
          this.decrementBool = false;
          this.incrementBool = false;  
        }
        else{
          this.decrementBool = true;
        }
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);