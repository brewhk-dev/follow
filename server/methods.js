Meteor.methods({
	followerFollow: function (uid) {
		check(uid, String);
		return Followers.update({
			followee: uid,
			follower: this.userId
		}, {
			$set: {
				invalidatedAt: undefined
			},
			$setOnInsert: {
				followee: uid,
				follower: this.userId,
				invalidatedAt: undefined
			}
		}, {
			upsert: true
		});
	},
	followerUnfollow: function (uid) {
		check(uid, String);
		return Followers.remove({
			followee: uid,
			follower: this.userId
		});
	},
	followerUnfollowAll: function () {
		return Followers.remove({
			follower: this.userId
		});
	},
	followerGetFollowers: function (uid) {
		check(uid, String);
		let followers = Followers.find({
			followee: uid
		}).fetch();
		return _.map(followers, function (value, index, list) {
			return value.follower;
		});
	},
	followerGetFollowersCount: function (uid) {
		check(uid, String);
		return Followers.find({
			followee: uid
		}).count();
	},
	followerGetFollowing: function (uid) {
		check(uid, String);
		let following = Followers.find({
			follower: uid
		}).fetch();
		return _.map(following, function (value, index, list) {
			return value.followee;
		});
	},
	followerGetFollowingCount: function (uid) {
		check(uid, String);
		return Followers.find({
			follower: uid
		}).count();
	},
	followerCheckIfFollowing: function (uid) {
		check(uid, String);
		return !!Followers.findOne({
			followee: uid,
			follower: this.userId
		});
	},
	followerDeleteUserData: function (uid) {
		check(uid, String);
		return Followers.remove({
			$or: [
				{ followee: uid },
				{ follower: this.userId }
			]
		});
	}
});