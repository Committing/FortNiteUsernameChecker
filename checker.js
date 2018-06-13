

function setUser(user) {
    $('#name').val('First');
    $('#lastName').val('Last');
    $('#email').val('email@email.com');
    $('#password').val('cowboy123');
    $('#displayName').val(user);
    $('#termsAgree').prop('checked', true);
    $('#register').click();
}

function startUsernames() {

	var usernames = [
		'God',
		'Mod',
		'Moderator',
		'Admin',
		'Administrator',
		'Close',
		'Undies',
		'Cutie',
		'Ass',
		'Big',
		'Cow',
		'Dog',
		'Egg',
		'Flip',
		'Grid',
		'Shaft',
		'Touch',
		'Bus',
		'link',
		'new',
		'forget',
		'forgot',
		'never',
		'lent',
		'cry',
		'pain',
		'fear',
		'lol',
		'IoI',
		'O_O',
		'o_o',
		'v_v',
		'twit',
		'noob',
		'legend',
		'sweet',
		'telephone',
		'Computer',
		'Comp',
		'Poor',
		'rich',
		'bitcoin',
		'flip',
		'coin',
		'waste',
		'history',
		'food',
		'gonna',
		'going',
		'just',
		'with',
		'you',
		'called',
		'username',
		'user',
		'few',
		'actually',
		'add',
		'accept',
		'message',
		'received',
		'sent',
		'send',
		'log',
		'click',
		'like',
		'your',
		'youre',
		'there',
		'their',
		'theyre'
    ];

	var time = 1500;

	usernames.map(function(data) {
	    setTimeout( function(){ setUser(data); }, time)
	    time += 1500;
	});

}
