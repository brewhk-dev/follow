import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import {
  checkForRelationship,
  getFollowerIdsOfUser,
  getFollowersOfUser,
  getFollowerCountOfUser,
  getFollowingIdsOfUser,
  getFollowingsOfUser,
  getFollowingCountOfUser,
} from '../lib/functions.js';

Follower = {};

Follower.follow = function (userId, callback) {
  check(userId, String);
	Meteor.call('brewhk:follower/follow', userId, callback);
};

Follower.unfollow = function (userId, callback) {
  check(userId, String);
	Meteor.call('brewhk:follower/unfollow', userId, callback);
};

Follower.unfollowAll = function (callback) {
	Meteor.call('brewhk:follower/unfollowAll', callback);
};

Follower.getFollowerIds = function (userId) {
	return userId ? getFollowerIdsOfUser(userId) : [];
};

Follower.getFollowers = function (userId) {
	return userId ? getFollowersOfUser(userId) : [];
};

Follower.getFollowerCount = function (userId) {
	return userId ? getFollowerCountOfUser(userId) : 0;
};

Follower.getFollowingIds = function (userId) {
	return userId ? getFollowingIdsOfUser(userId) : [];
};

Follower.getFollowings = function (userId) {
	return userId ? getFollowingsOfUser(userId) : [];
};

Follower.getFollowingCount = function (userId) {
	return userId ? getFollowingCountOfUser(userId) : 0;
};

Follower.checkIfFollower = function (userId) {
  return userId ? checkForRelationship(userId, Meteor.userId()) : false;
};

Follower.checkIfFollowing = function (userId) {
  return userId ? checkForRelationship(Meteor.userId(), userId) : false;
};

export default Follower;
