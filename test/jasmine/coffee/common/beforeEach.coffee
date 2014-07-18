define [
    "marionette"
    "underscore"
], (Marionette, _) ->

    beforeEach -> 

        jasmine.addMatchers
            toBeString: () ->
                return {
                    compare: (actual) ->
                        return  {
                            pass: _.isString(actual)
                        }
                }
            toBeObject: () ->
                return {
                    compare: (actual) ->
                        return  {
                            pass: _.isObject(actual)
                        }
                }
            toBeArray: () ->
                return {
                    compare: (actual) ->
                        return  {
                            pass: _.isArray(actual)
                        }
                }
            toBeInArray: (array) ->
                return {
                    compare: (actual) ->
                        return  {
                            pass: _.indexOf(array, actual)
                        }
                }



