function VoteController() {
    this.votes = 0;
    var originalNum = this.votes;
    var vm = this;
    this.incrementVotes = function () {
      if(vm.votes <= originalNum){
        vm.votes++;
      }
    };

    this.decrementVotes = function () {
      if(vm.votes >= originalNum){
        vm.votes--;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);