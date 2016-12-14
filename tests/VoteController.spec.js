describe('VoteController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	it('should increment the vote count', function () {
		var $scope = {};

		var controller = $controller('VoteController as vm', { $scope: $scope });

		var originalCount = controller.votes;

		controller.incrementVotes();

		expect(controller.votes).toBe(originalCount + 1);
	});

	it('should decrement the vote count', function () {
		var $scope = {};

		var controller = $controller('VoteController as vm', { $scope: $scope });

		var originalCount = controller.votes;

		controller.decrementVotes();

		expect(controller.votes).toBe(originalCount - 1);
	});

	it('should only increment vote by 1', function() {
		var $scope = {};

		var controller = $controller('VoteController as vm', { $scope: $scope });

		var originalCount = controller.votes;

		controller.incrementVotes();
		controller.incrementVotes();
		controller.incrementVotes();

		expect(controller.votes).toBe(originalCount + 1);
	});

	it('should only decrement vote by 1', function() {
		var $scope = {};

		var controller = $controller('VoteController as vm', { $scope: $scope });

		var originalCount = controller.votes;

		controller.decrementVotes();
		controller.decrementVotes();
		controller.decrementVotes();

		expect(controller.votes).toBe(originalCount - 1);
	});
});
