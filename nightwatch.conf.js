module.exports = {
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 8080
  },

  "test_settings" : {
    "default" : {
    	"launch_url": "http://localhost:8080",
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
