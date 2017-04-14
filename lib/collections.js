import { Mongo } from "meteor/mongo";

const Followers = new Mongo.Collection('brewhk_followers');

Followers.attachSchema(new SimpleSchema({
	following: {
		type: String
	},
	follower: {
		type: String
	}
}));


export default Followers;
