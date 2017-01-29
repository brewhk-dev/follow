import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { follow, unfollow, unfollowAll, removeUserData } from './functions.js';

Meteor.methods({
	'brewhk:follower/follow': function (followingId) {
		check(followingId, String);
    return follow(this.userId, followingId);
	},
	'brewhk:follower/unfollow': function (followingId) {
		check(followingId, String);
    return unfollow(this.userId, followingId)
	},
	'brewhk:follower/unfollowAll': function () {
    return unfollowAll(this.userId);
	},
	'brewhk:follower/removeUserData': function (userId) {
		check(userId, String);
    return removeUserData(userId);
	}
});