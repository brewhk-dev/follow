Follower = {};

Follower.follow = function (userId, callback) {
	Meteor.call('followerFollow', userId, callback);
};

Follower.unfollow = function (userId, callback) {
	Meteor.call('followerUnfollow', userId, callback);
};

Follower.unfollowAll = function (callback) {
	Meteor.call('followerUnfollowAll', callback);
};

Follower.getFollowers = function (userId, callback) {
	Meteor.call('followerGetFollowers', userId, callback);
};

Follower.getFollowerCount = function (userId, callback) {
	Meteor.call('followerGetFollowersCount', userId, callback);
};

Follower.getFollowing = function (userId, callback) {
	Meteor.call('followerGetFollowing', userId, callback);
};

Follower.getFollowingCount = function (userId, callback) {
	Meteor.call('followerGetFollowingCount', userId, callback);
};

Follower.checkIfFollowing = function (userId, callback) {
	Meteor.call('followerCheckIfFollowing', userId, callback);
};