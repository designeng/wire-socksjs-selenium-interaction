define(["wire", "underscore", "hasher"], function(wire, _, hasher) {
  var anotherHandlerSpy, oneRouteHandlerSpy, specRouterSpec;
  oneRouteHandlerSpy = jasmine.createSpy('oneRouteHandler');
  anotherHandlerSpy = jasmine.createSpy('oneRouteHandler');
  specRouterSpec = {
    $plugins: ["core/plugin/contextRouter"],
    controller: {
      contextRouter: {
        routes: {
          "autocomplete": {
            spec: "components/autocomplete/spec",
            slot: {
              $ref: "dom.first!body"
            }
          },
          "packresponse": {
            spec: "components/packresponse/spec",
            slot: {
              $ref: "dom.first!body"
            }
          }
        }
      }
    }
  };
  return describe("contextRouter plugin integration", function() {
    beforeEach(function(done) {
      var _this = this;
      return wire(specRouterSpec).then(function(ctx) {
        _this.ctx = ctx;
        hasher.prependHash = "";
        hasher.init();
        console.log("__@ctx.controller", _this.ctx.controller);
        return done();
      }).otherwise(function(err) {
        return console.log("ERROR", err);
      });
    });
    it("controller has _routes property", function(done) {
      expect(this.ctx.controller._routes).toBeArray();
      return done();
    });
    return it("controller routes in array ['autocomplete', 'packresponse']", function(done) {
      var route, _i, _len, _ref;
      _ref = this.ctx.controller._routes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        route = _ref[_i];
        expect(route._pattern).toBeInArray(["autocomplete", "packresponse"]);
      }
      return done();
    });
  });
});
