const users = [
	{
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz'
	},
	{
		id: 2,
		name: 'Ervin Howell',
		username: 'Antonette',
		email: 'Shanna@melissa.tv'
	},
	{
		id: 3,
		name: 'Clementine Bauch',
		username: 'Samantha',
		email: 'Nathan@yesenia.net'
	}
];

const getUsers = () => {
	return {
		data: users
	};
};

module.exports = {
	getUsers
};
