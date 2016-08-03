function VoteController() {
    var vm = this;

    vm.votes = 0;

    vm.incrementVotes = function () {
      vm.votes++;
       if (vm.votes >= vm.votes +1) {
        vm.votes = 0;
      }
    };

    vm.decrementVotes = function () {
      vm.votes--;
      if (vmm.votes <= vm.votes -1) {
        vm.votes = 0;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);