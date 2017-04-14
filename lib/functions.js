import { Meteor } from 'meteor/meteor';
import Followers from './collections.js';

const _getMapping = function (userId, type) {
  return Followers.find({
    [type]: userId
  });
}

// Check if a user is following another user
const checkForRelationship = function (followerId, followingId) {
  return !!Followers.findOne({
    follower: followerId,
    following: followingId,
  });
}

/** FOLLOWERS */

// Get all mapping of this user's followers
const getCursorOfMappingOfUserFollowers = function (followingId) {
  return _getMapping(followingId, 'following');
}

const getFollowerIdsOfUser = function (userId) {
  return getCursorOfMappingOfUserFollowers(userId).fetch().map(r => r.follower);
}

const getFollowersCursorOfUser = function (userId) {
  // Get the follower's IDs
  // Then return cursor from Meteor.users collections
  return Meteor.users.find({
    _id: {
      $in: getFollowerIdsOfUser(userId),
    }
  })
}

const getFollowersOfUser = function (userId) {
  return getFollowersCursorOfUser(userId).fetch();
}

const getFollowerCountOfUser = function (userId) {
  return getCursorOfMappingOfUserFollowers(userId).count();
}

/** FOLLOWING */

// Get all mapping of who this user follows
const getCursorOfMappingOfWhoUserFollows = function (followerId) {
  return _getMapping(followerId, 'follower');
}

const getFollowingIdsOfUser = function (userId) {
  return getCursorOfMappingOfWhoUserFollows(userId).fetch().map(r => r.following);
}


// Get a cursor of users that this user follows
const getFollowingsCursorOfUser = function (userId) {
  // Get the following's IDs
  // Then return cursor from Meteor.users collections
  return Meteor.users.find({
    _id: {
      $in: getFollowingIdsOfUser(userId),
    }
  })
}

const getFollowingsOfUser = function (userId) {
  return getFollowingsCursorOfUser(userId).fetch();
}

const getFollowingCountOfUser = function (userId) {
  return getCursorOfMappingOfWhoUserFollows(userId).count();
}

export {
  checkForRelationship,
  getCursorOfMappingOfUserFollowers,
  getFollowerIdsOfUser,
  getFollowersCursorOfUser,
  getFollowersOfUser,
  getFollowerCountOfUser,
  getCursorOfMappingOfWhoUserFollows,
  getFollowingIdsOfUser,
  getFollowingsCursorOfUser,
  getFollowingsOfUser,
  getFollowingCountOfUser,
};
