define(["jquery"], function($) {
  var clearActive, ids, itemSelected, setActive;
  ids = ["searchTab", "orderTab"];
  itemSelected = "headerTabs__item_selected";
  clearActive = function() {
    var id, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = ids.length; _i < _len; _i++) {
      id = ids[_i];
      _results.push($(this).find("#" + id).removeClass(itemSelected));
    }
    return _results;
  };
  setActive = function(id) {
    clearActive.call(this);
    return $(this).find("#" + id).addClass(itemSelected);
  };
  return {
    clearActive: clearActive,
    setActive: setActive
  };
});
