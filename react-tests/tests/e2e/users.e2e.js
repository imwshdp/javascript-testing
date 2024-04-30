const UsersListPage = require('../pages/users.page');

describe('Fetching Users List Tests: >>', () => {
	it('Should fetch users list', async () => {
		await UsersListPage.loadData();
	});

	it('Should fetch users list and delete first one', async () => {
		await UsersListPage.loadData();
		await UsersListPage.deleteUser();
	});
});
