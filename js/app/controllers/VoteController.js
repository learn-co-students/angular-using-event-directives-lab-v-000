function VoteController() {
  var vm = this
    vm.votes = 0;

    vm.incrementVotes = function () {
      if (vm.upvoted == 'true'){
        vm.votes--;
        vm.upvoted = 'false';
      } else {
        vm.votes++;
        vm.upvoted = 'true';
      }
    };

    vm.decrementVotes = function () {
      if (vm.downvted === 'true') {
        vm.votes++;
        vm.downvoted = 'false';
      } else {
        vm.votes--;
        vm.downvoted = 'true';
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
