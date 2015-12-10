Schemata = {};

Schemata.Followers = new SimpleSchema({
	followee: {
		type: String
	},
	follower: {
		type: String
	}
});

Followers.attachSchema(Schemata.Followers);