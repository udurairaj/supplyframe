module.exports = {
  'Page loads test' (browser) {
    browser
      .url('https://localhost:8080')
      .waitForElementVisible('#title')
      .assert.containsText("#title", "Movie Madness!")
  }
}