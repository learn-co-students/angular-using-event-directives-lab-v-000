function VoteController() {
    var vm = this;

    vm.votes = 0;

    vm.incrementVotes = function () {
      vm.votes ++;
    };

    vm.decrementVotes = function () {
      vm.votes --;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
