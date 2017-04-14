import { Meteor } from 'meteor/meteor';
import Followers from '../lib/collections.js';

const follow = function (followerId, followingId) {
  return Followers.upsert({
    follower: followerId,
    following: followingId,
  }, {
    $setOnInsert: {
      follower: followerId,
      following: followingId,
    }
  });
}

const unfollow = function (followerId, followingId) {
  return Followers.remove({
    follower: followerId,
    following: followingId,
  });
}

const unfollowAll = function (followerId) {
  return Followers.remove({
    follower: followerId,
  });
}

const removeUserData = function (userId) {
  return Followers.remove({
    $or: [
      { following: uid },
      { follower: this.userId }
    ]
  });
}

export {
  follow,
  unfollow,
  unfollowAll,
  removeUserData,
};
