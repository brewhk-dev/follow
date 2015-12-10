# follow
Keeps track of who you follow, and who's following you.

### Usage

Add the package from Atmosphere.

    meteor add brewhk:followers

##### Client-side Functions

All callbacks are called with `error` as its first parameter, and `result` as its second.

###### Follow user

Follow a user.

    Follower.follow(userId, callback)

###### Unfollow

Unfollow a user.

    Follower.unfollow(userId, callback)

Unfollow all users.

    Follower.unfollowAll(callback)

###### Get Follower Data

Get an array of ID of users who are following the specified user.

    Follower.getFollowers(userId, callback)

Get an array of ID of users who the specified user is following.

    Follower.getFollowing(userId, callback)

Get the number of users following the specified user.

    Follower.getFollowerCount(userId, callback)

Get the number of users the specified user is following.

    Follower.getFollowingCount(userId, callback)

Returns a boolean value of whether you are following a particular user.

    Follower.checkIfFollowing(userId, callback)

##### Server-side Methods

###### Follow user

Follow a user.

    Meteor.call('followerFollow', uid);

###### Unfollow

Unfollow a user.

    Meteor.call('followerUnfollow', uid);

Unfollow all users.

    Meteor.call('followerUnfollowAll');

###### Get Follower Data

Get an array of ID of users who are following the specified user.

    Meteor.call('followerGetFollowers', uid);

Get an array of ID of users who the specified user is following.

    Meteor.call('followerGetFollowing', uid);

Get the number of users following the specified user.

    Meteor.call('followerGetFollowersCount', uid);

Get the number of users the specified user is following.

    Meteor.call('followerGetFollowingCount', uid);

Returns a boolean value of whether you are following a particular user.

    Meteor.call('followerCheckIfFollowing', uid);

###### Delete

Delete all data associated with a particular user.

    Meteor.call('followerDeleteUserData', uid);

##### Publication / Subscription

`Follower` provides two publications.

    Meteor.subscribe('followers', uid); // Subscribes to the list of followers by the user
    Meteor.subscribe('following', uid); // Subscribes to the list of users followed by the user