# follow
Keeps track of who you follow, and who's following you.

### Usage

Add the package from Atmosphere.

    meteor add brewhk:follower

##### Client-side Functions

All callbacks are called with `error` as its first parameter, and `result` as its second.

Developers should first subscribe to the relevant publications before making the `getXXX` calls.

###### Follow user

Follow a user.

    Follower.follow(userId, callback)

###### Unfollow

Unfollow a user.

    Follower.unfollow(userId, callback)

Unfollow all users.

    Follower.unfollowAll(callback)

###### Get Follower Data

Get an array of user objects who are following the specified user.

    Follower.getFollowers(userId)

Get an array of ID of users who are following the specified user.

    Follower.getFollowerIds(userId)

Get the number of users following the specified user.

    Follower.getFollowerCount(userId)

Returns a boolean value of whether you are being followed by a particular user.

    Follower.checkIfFollower(userId)

Get an array of user objects who the specified user is following.

    Follower.getFollowings(userId)

Get an array of ID of users who the specified user is following.

    Follower.getFollowingIds(userId)

Get the number of users the specified user is following.

    Follower.getFollowingCount(userId)

Returns a boolean value of whether you are following a particular user.

    Follower.checkIfFollowing(userId)

##### Server-side Methods

###### Follow user

Follow a user.

    Meteor.call('brewhk:follower/follow', userId);

###### Unfollow

Unfollow a user.

    Meteor.call('brewhk:follower/unfollow', userId);

Unfollow all users.

    Meteor.call('brewhk:follower/unfollowAll');

###### Delete

Delete all data associated with a particular user.

    Meteor.call('brewhk:follower/removeUserData', userId);

##### Publication / Subscription

`Follower` provides two publications.

    Meteor.subscribe('brewhk:follower/followers', userId); // Subscribes to the list of followers by the user
    Meteor.subscribe('brewhk:follower/following', userId); // Subscribes to the list of users followed by the user
