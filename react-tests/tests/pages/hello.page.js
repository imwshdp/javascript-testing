const { $ } = require('@wdio/globals');
const Page = require('./page');

class HelloPage extends Page {
	get searchInput() {
		return $('#search');
	}

	get toggleButton() {
		return $('#toggle');
	}

	get helloTitle() {
		return $('#hello');
	}

	async toggleTitleWithInput(text) {
		await this.searchInput.setValue(text);
		await this.toggleButton.click();
	}

	open() {
		return super.open('e2e');
	}
}

module.exports = new HelloPage();
