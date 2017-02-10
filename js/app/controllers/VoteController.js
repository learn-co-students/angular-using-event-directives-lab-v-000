function VoteController($scope) {
    this.votes = 0;

    $scope.addDisabled = false;
    $scope.removeDisabled = false;

    this.incrementVotes = function () {
      this.votes += 1;
      $scope.disableButton('add');
    };

    this.decrementVotes = function () {
      this.votes -= 1;
      $scope.disableButton('remove');
    };

    $scope.disableButton = function (param) {
      if (param === 'add') {
        $scope.addDisabled = true;
        $scope.removeDisabled = false;
      } else {
        $scope.removeDisabled = true;
        $scope.addDisabled = false;
      }
    }
}

angular
    .module('app')
    .controller('VoteController', VoteController);
