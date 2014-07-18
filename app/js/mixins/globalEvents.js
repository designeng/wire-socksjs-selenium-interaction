var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["jquery", "marionette", "underscore"], function($, Marionette, _) {
  var GlobalEvents, _ref;
  return GlobalEvents = (function(_super) {
    __extends(GlobalEvents, _super);

    function GlobalEvents() {
      _ref = GlobalEvents.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    GlobalEvents.prototype.htmlEvents = ['html:click'];

    GlobalEvents.prototype.windowsEvents = ['window:resize'];

    GlobalEvents.prototype.initialize = function() {
      return this.bindGlobalEvents();
    };

    GlobalEvents.prototype.bindGlobalEvents = function() {
      var _this = this;
      $(window).on('resize', function() {
        var sEvents;
        sEvents = _this.joinEvent('windowsEvents');
        return _this.trigger(sEvents, {
          width: $(window).width(),
          height: $(window).height()
        });
      });
      return $("html").on('click', function(e) {
        var sEvents;
        sEvents = _this.joinEvent('htmlEvents');
        return _this.trigger(sEvents, e);
      });
    };

    GlobalEvents.prototype.addHtmlEvent = function(eventName) {
      return this.htmlEvents.push(eventName);
    };

    GlobalEvents.prototype.removeHtmlEvent = function(eventName) {
      return this.htmlEvents = _.without(this.htmlEvents, eventName);
    };

    GlobalEvents.prototype.joinEvent = function(eventGroup) {
      return this[eventGroup].join(' ');
    };

    return GlobalEvents;

  })(Marionette.Controller);
});
