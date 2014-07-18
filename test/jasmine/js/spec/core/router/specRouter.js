define(["wire", "underscore", "hasher"], function(wire, _, hasher) {
  var anotherHandlerSpy, oneRouteHandlerSpy, specRouterSpec;
  oneRouteHandlerSpy = jasmine.createSpy('oneRouteHandler');
  anotherHandlerSpy = jasmine.createSpy('oneRouteHandler');
  define('oneController', function() {
    var OneController;
    return OneController = (function() {
      function OneController() {}

      OneController.prototype.router = void 0;

      OneController.prototype.oneRouteHandler = function() {
        return oneRouteHandlerSpy();
      };

      return OneController;

    })();
  });
  define('anotherController', function() {
    var AnotherController;
    return AnotherController = (function() {
      function AnotherController() {}

      AnotherController.prototype.router = void 0;

      AnotherController.prototype.anotherHandler = function() {
        return anotherHandlerSpy();
      };

      return AnotherController;

    })();
  });
  specRouterSpec = {
    $plugins: ["core/plugin/specRouter"],
    controller: {
      create: "oneController",
      specRouter: {
        routes: {
          "one/route": "oneRouteHandler"
        }
      }
    },
    anotherController: {
      create: "anotherController",
      specRouter: {
        routes: {
          "one/route": "anotherHandler"
        }
      }
    }
  };
  return describe("specRouter plugin integration", function() {
    location.href = "http://localhost:7788/test/jasmine/#/one/route";
    beforeEach(function(done) {
      var _this = this;
      return wire(specRouterSpec).then(function(ctx) {
        _this.ctx = ctx;
        hasher.init();
        return done();
      }).otherwise(function(err) {
        return console.log("ERROR", err);
      });
    });
    it("controller has router property", function(done) {
      expect(this.ctx.controller.router).toBeDefined();
      return done();
    });
    it("controller oneRouteHandler called", function(done) {
      expect(oneRouteHandlerSpy).toHaveBeenCalled();
      return done();
    });
    return it("controller oneRouteHandler called and anotherController anotherHandler called", function(done) {
      expect(oneRouteHandlerSpy).toHaveBeenCalled();
      expect(anotherHandlerSpy).toHaveBeenCalled();
      return done();
    });
  });
});
