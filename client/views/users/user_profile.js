

Template.user_profile.user = function(){
	if(userId=Session.get('selectedUserId')){
		console.log(Meteor.users.findOne(userId));
		return Meteor.users.findOne(userId);
	}
}

Template.user_profile.avatarUrl = function(){
	return Gravatar.getGravatar(this, {
		d: 'http://telescope.herokuapp.com/img/default_avatar.png',
		s: 80
	});
}

Template.user_profile.createdAtFormatted = function() {

		return this.createdAt ? moment(this.createdAt).fromNow() : '–';
	
}

Template.user_profile.isCurrentUser = function(){
	return Meteor.user() && (Session.get('selectedUserId') === Meteor.user()._id);
}