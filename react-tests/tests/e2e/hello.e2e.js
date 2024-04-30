const { expect } = require('@wdio/globals');
const HelloE2ePage = require('../pages/hello.page');

describe('Hello E2E Page Tests: >>', () => {
	it('Should toggle hello title', async () => {
		await HelloE2ePage.open();

		await HelloE2ePage.toggleTitleWithInput('hello');

		await expect(HelloE2ePage.helloTitle).toBeExisting();

		await HelloE2ePage.toggleButton.click();
		await expect(HelloE2ePage.helloTitle).not.toBeExisting();
	});

	it('Should not toggle hello title', async () => {
		await HelloE2ePage.open();

		await HelloE2ePage.toggleTitleWithInput('not valid string');
		await expect(HelloE2ePage.helloTitle).not.toBeExisting();
	});
});
