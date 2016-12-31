function VoteController() {
  var vm = this;
  
    this.votes = 0;

    this.incrementVotes = function () {
        vm.votes++;
    };

    this.decrementVotes = function () {
        vm.votes--;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
