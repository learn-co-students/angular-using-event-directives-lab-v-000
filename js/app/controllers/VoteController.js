function VoteController() {
    var vm = this;

    vm.votes = 0;
    

    this.incrementVotes = function () {
      vm.votes += 1;
    };

    this.decrementVotes = function () {
      vm.votes -= 1;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);