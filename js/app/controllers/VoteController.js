function VoteController() { 
    var vm = this;
    this.votes = 0;
    vm.voteChange = 0

    this.incrementVotes = function () {
      if (vm.voteChange <= 0){
        this.votes++;
        this.voteChange++;
      }
    };

    this.decrementVotes = function () {
      if (vm.voteChange >= 0){
        this.votes--;
        this.voteChange--;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);