define(["wire", "meld"], function(wire, meld) {
  var serviceHubSpec;
  define('serviceHubController', function() {
    var serviceHubController;
    return serviceHubController = (function() {
      function serviceHubController() {}

      serviceHubController.prototype.client = void 0;

      serviceHubController.prototype.services = void 0;

      serviceHubController.prototype.sendRequest = void 0;

      serviceHubController.prototype.sendRequestErrback = void 0;

      serviceHubController.prototype.setCurrent = function(entity) {
        return this.current = entity;
      };

      serviceHubController.prototype.getCurrent = function() {
        return this.current;
      };

      serviceHubController.prototype.onReady = function() {
        var _this = this;
        return meld.after(this, "sendRequest", function(resultEntity) {
          return _this.setCurrent(resultEntity);
        });
      };

      return serviceHubController;

    })();
  });
  serviceHubSpec = {
    $plugins: ["core/plugin/serviceHub"],
    controller: {
      create: "serviceHubController",
      ready: {
        "onReady": {},
        "sendRequest": [
          "stubService", {
            towns: ["Moscow", "Paris"]
          }
        ]
      },
      bindToService: ["stubService"]
    }
  };
  return describe("serviceHub integration with rest client", function() {
    beforeEach(function(done) {
      var _this = this;
      return wire(serviceHubSpec).then(function(ctx) {
        _this.ctx = ctx;
        return done();
      }).otherwise(function(err) {
        return console.log("ERROR", err);
      });
    });
    it("controller has client property", function(done) {
      expect(this.ctx.controller.client).toBeDefined();
      return done();
    });
    it("controller has sendRequest function", function(done) {
      expect(this.ctx.controller.sendRequest).toBeDefined();
      return done();
    });
    return it("controller must have @current {Object} promise", function(done) {
      expect(this.ctx.controller.getCurrent()).toBeObject();
      return done();
    });
  });
});
