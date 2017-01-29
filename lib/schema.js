import Followers from './collections.js';

Followers.attachSchema(new SimpleSchema({
	following: {
		type: String
	},
	follower: {
		type: String
	}
}));
