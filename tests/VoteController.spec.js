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
});
