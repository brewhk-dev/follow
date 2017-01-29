import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { getFollowersCursorOfUser, getFollowingsCursorOfUser, getCursorOfMappingOfUserFollowers, getCursorOfMappingOfWhoUserFollows } from '../lib/functions.js';

// Publish the mapping information and users of this user's followers
Meteor.publish('brewhk:follower/followers', function (userId = this.userId) {
	check(userId, String);
	return [
    getFollowersCursorOfUser(userId),
    getCursorOfMappingOfUserFollowers(userId),
  ];
});

// Publish the mapping information and users that this user is following
Meteor.publish('brewhk:follower/following', function (userId = this.userId) {
	check(userId, String);
	return [
    getFollowingsCursorOfUser(userId),
    getCursorOfMappingOfWhoUserFollows(userId),
  ];
});