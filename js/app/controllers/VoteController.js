function VoteController() {
    vm = this;
    this.votes = 0;

    this.incrementVotes = function () {
      if(this.votes == 0) {
        vm.votes++
      }
    };

    this.decrementVotes = function () {
      // if (this.votes == 1 ) {
        vm.votes--
      // }
    };


}

angular
    .module('app')
    .controller('VoteController', VoteController);
