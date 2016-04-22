function VoteController() {
    this.votes = 0;
    vm = this
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
