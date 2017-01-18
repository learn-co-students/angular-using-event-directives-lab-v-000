function VoteController() {
  var vm = this;
  
  vm.votes = 0;
  
  vm.clickedIncrement = false;
  vm.clickedDecrement = false;

  vm.incrementVotes = function () {
    if (vm.clickedIncrement === false) {
      vm.votes++;
      vm.clickedIncrement = true;
    }
    else {
      alert("You can only click once!");
    }
  };

  vm.decrementVotes = function () {
    if (vm.clickedDecrement === false) {
      vm.votes--;
      vm.clickedDecrement = true;
    }
    else {
      alert("You can only click once!");
    }
  };
}

angular
  .module('app')
  .controller('VoteController', VoteController);