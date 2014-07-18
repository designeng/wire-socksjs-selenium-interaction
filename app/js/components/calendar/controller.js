define(["moment", "jquery"], function(moment, $) {
  var CalendarController;
  return CalendarController = (function() {
    function CalendarController() {}

    CalendarController.prototype.onReady = function() {
      return console.log("___@collection", this.collection);
    };

    CalendarController.prototype.afterAdd = function() {
      var _this = this;
      return setTimeout(function() {
        var grid, weekEnds;
        grid = $(_this.calendarView).find("ul.calendarGrid");
        weekEnds = grid.find("li[data-cola-id='test']");
        return console.log("____weekEnds.length", weekEnds, weekEnds.length);
      }, 10);
    };

    CalendarController.prototype.onChange = function() {
      var grid, weekEnds;
      console.log("______onChange", this.collection.getProvider().origSource._array.length);
      grid = $(this.calendarView).find("ul.calendarGrid");
      weekEnds = grid.find("li[data-cola-id='test']");
      return console.log("____weekEnds.length", weekEnds, weekEnds.length);
    };

    return CalendarController;

  })();
});
