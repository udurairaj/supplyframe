module.exports = {
	'Google search' (browser) {
		const mainQueryInputSelector = "input[id='#search']";
		const mainQuery = "Thor";
		const submitButtonSelector = '#search[type="submit"]'

		browser
			.url('https://localhost:8080')
			.setValue(mainQueryInputSelector, mainQuery)
			.click(submitButtonSelector)
			.saveScreenshot('tests_output/movie-madness-thor-test.png')
	}
}