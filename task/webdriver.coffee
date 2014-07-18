webdriver = require('selenium-webdriver')
When = require('when')

module.exports = (grunt) ->

    grunt.task.registerTask "webdriver", "selenium webdriver script", () ->

        # here we must set global["logId"] and cookie "logId"=global["logId"]

        driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build()

        driver.get('http://localhost:7788/app/#/order/left')

        When("start").delay(3000).then(() ->
            driver.findElement(webdriver.By.id('center')).click()
        )
        # .delay(2000).then(() ->
        #     driver.findElement(webdriver.By.id('right')).click()
        # )
        .delay(20000).then(() ->
            driver.quit()
        )

        grunt.log.writeln "OK"