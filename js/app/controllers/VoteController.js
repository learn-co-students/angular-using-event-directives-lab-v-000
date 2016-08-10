function VoteController() {
    var vm = this;
    vm.votes = 0;

    vm.incrementVotes = function () {
      vm.votes++;
    };

    vm.decrementVotes = function () {
      vm.votes--1;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
