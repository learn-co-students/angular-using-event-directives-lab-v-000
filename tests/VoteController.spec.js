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

	it('should not increment the vote count more than once', function () {
		var $scope = {};

		var controller = $controller('VoteController as vm', { $scope: $scope });

		var originalCount = controller.votes;

		controller.incrementVotes();
		controller.incrementVotes();

		expect(controller.votes).toBe(originalCount + 1);
	});

	it('should be able to decrement the vote count after incrementing it', function () {
		var $scope = {};

		var controller = $controller('VoteController as vm', { $scope: $scope });

		controller.incrementVotes();

		var voteCount = controller.votes;

		controller.decrementVotes();

		expect(controller.votes).toBe(voteCount - 1);
	});

	it("should not be able to decrement the vote count if it hasn't voted", function () {
		var $scope = {};

		var controller = $controller('VoteController as vm', { $scope: $scope });

		var originalCount = controller.votes;

		controller.decrementVotes();

		expect(controller.votes).toBe(originalCount);
	});
});
