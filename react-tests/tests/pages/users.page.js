const { $, $$ } = require('@wdio/globals');
const Page = require('./page');

class UsersTestPage extends Page {
	get loadingTitle() {
		return $('#users-loading');
	}

	get usersList() {
		return $('#users-list');
	}

	get usersItems() {
		return $$('#user-delete');
	}

	async loadData() {
		try {
			await this.open();
			await this.loadingTitle.waitForDisplayed({
				timeout: 2000
			});
			await this.usersList.waitForDisplayed({
				timeout: 2000
			});
		} catch (error) {
			throw new Error('Unable to fetch users');
		}
	}

	async deleteUser() {
		try {
			const usersCount = await this.usersItems.length;

			if (!usersCount) {
				throw new Error('Users are not found');
			}

			await this.usersItems[0].click();

			const usersCountAfterDelete = await this.usersItems.length;

			if (usersCount - usersCountAfterDelete !== 1) {
				throw new Error('User was not deleted or more than one user were deleted');
			}
		} catch (error) {
			throw new Error(`Unable to delete user from users list: ${error.message}`);
		}
	}

	open() {
		return super.open('users-test');
	}
}

module.exports = new UsersTestPage();
