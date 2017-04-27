var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');
require('nightwatch-cucumber')({
    /* other configuration options */
});

module.exports = {
    "src_folders" : ["features"],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "",

    "selenium" : {
        "start_process" : true,
        "server_path" : seleniumServer.path,
        "log_path" : "",
        "port" : 4444,
        "cli_args" : {
            "webdriver.chrome.driver" : chromedriver.path,
            "webdriver.gecko.driver" : "",
            "webdriver.edge.driver" : ""
        }
    },

    "test_settings" : {
        "default" : {
            "launch_url" : "http://localhost",
            "selenium_port"  : 4444,
            "selenium_host"  : "localhost",
            "silent": true,
            "screenshots" : {
                "enabled" : false,
                "path" : ""
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "marionette": true
            }
        },

        "chrome" : {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
};