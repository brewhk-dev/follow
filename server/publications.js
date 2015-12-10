Meteor.publish('followers', function (userId) {
	check(userId, String);
	return Followers.find({
		followee: userId
	});
});

Meteor.publish('following', function (userId) {
	check(userId, String);
	return Followers.find({
		follower: userId
	});
});