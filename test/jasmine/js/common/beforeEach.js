define(["marionette", "underscore"], function(Marionette, _) {
  return beforeEach(function() {
    jasmine.Expectation.addMatchers({
      toBeInstanceOf: function(type) {
        return this.actual instanceof type;
      }
    });
    return jasmine.addMatchers({
      toBeString: function() {
        return {
          compare: function(actual) {
            return {
              pass: _.isString(actual)
            };
          }
        };
      },
      toBeObject: function() {
        return {
          compare: function(actual) {
            return {
              pass: _.isObject(actual)
            };
          }
        };
      },
      toBeArray: function() {
        return {
          compare: function(actual) {
            return {
              pass: _.isArray(actual)
            };
          }
        };
      },
      toBeInArray: function(array) {
        return {
          compare: function(actual) {
            return {
              pass: _.indexOf(array, actual)
            };
          }
        };
      }
    });
  });
});
