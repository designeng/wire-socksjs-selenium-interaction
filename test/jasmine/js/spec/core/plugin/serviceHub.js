define(["wire"], function(wire) {
  var sendRequestSpy, serviceHubSpec;
  sendRequestSpy = jasmine.createSpy('sendRequest');
  define('serviceHubController', function() {
    var serviceHubController;
    return serviceHubController = (function() {
      function serviceHubController() {}

      serviceHubController.prototype.services = void 0;

      serviceHubController.prototype.sendRequest = function(req) {
        return sendRequestSpy(req);
      };

      serviceHubController.prototype.getService = function(name) {
        return this.services[name];
      };

      return serviceHubController;

    })();
  });
  serviceHubSpec = {
    $plugins: ["rest/wire", "core/plugin/serviceHub"],
    client: {
      rest: [
        {
          module: 'rest/interceptor/mime',
          module: 'rest/interceptor/errorCode',
          module: 'rest/interceptor/entity'
        }
      ]
    },
    controller: {
      create: "serviceHubController",
      ready: {
        "sendRequest": {
          service: "stubService",
          data: {
            towns: ["Moscow", "Paris"]
          }
        }
      },
      bindToService: ["stubService"]
    }
  };
  return describe("serviceHub plugin integration", function() {
    beforeEach(function(done) {
      var _this = this;
      return wire(serviceHubSpec).then(function(ctx) {
        _this.ctx = ctx;
        return done();
      }).otherwise(function(err) {
        return console.log("ERROR", err);
      });
    });
    it("controller", function(done) {
      expect(this.ctx.controller).toBeDefined();
      return done();
    });
    it("controller has services property", function(done) {
      expect(this.ctx.controller.services).toBeDefined();
      return done();
    });
    it("controller sendRequest called", function(done) {
      expect(sendRequestSpy).toHaveBeenCalledWith({
        service: "stubService",
        data: {
          towns: ["Moscow", "Paris"]
        }
      });
      return done();
    });
    return it("controller getService call returns valid service", function(done) {
      expect(this.ctx.controller.getService("stubService").path).toBeString();
      expect(this.ctx.controller.getService("stubService").path).toBe("service/stub");
      return done();
    });
  });
});
