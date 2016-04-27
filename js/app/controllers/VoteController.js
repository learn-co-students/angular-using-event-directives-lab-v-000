function VoteController() {
	var that = this;
  that.votes = 0;
  that.status = true;
  that.clicked = false;

  this.incrementVotes = function () {
  	that.votes++;
  };

  this.decrementVotes = function () {
  	that.votes--;
  };

  this.toggleIncrement = function (status) {
  	if (status === true) {
  		that.status = false;
  	} else {
  		that.status = true;
  	};
  };

  this.toggleDecrement = function (clicked) {
  	if (clicked === false) {
  		that.clicked = true;
  	} else {
  		that.clicked = false;
  	};
  };
}

angular
    .module('app')
    .controller('VoteController', VoteController);