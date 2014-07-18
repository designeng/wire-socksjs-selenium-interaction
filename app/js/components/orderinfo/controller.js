define(["when", "jquery", "stupidError"], function(When, $) {
  var RenderingController;
  return RenderingController = (function() {
    function RenderingController() {}

    RenderingController.prototype.renderingDeferred = When.defer();

    RenderingController.prototype.onReady = function() {
      var _this = this;
      this.renderingDeferred.resolve(this);
      return setTimeout(function() {
        return _this.listCollection.add({
          id: 10,
          port: "Lissabon"
        });
      }, 1000);
    };

    RenderingController.prototype.isReady = function() {
      return this.renderingDeferred.promise;
    };

    return RenderingController;

  })();
});
