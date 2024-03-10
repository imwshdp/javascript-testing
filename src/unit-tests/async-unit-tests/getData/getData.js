const axios = require('axios');

const mapArrayToString = require('../../syncTests/mapArrayToString/mapArrayToString');

const getData = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		const usersIds = response.data.map(user => user.id);

		return mapArrayToString(usersIds);
	} catch (e) {}
};

module.exports = getData;
