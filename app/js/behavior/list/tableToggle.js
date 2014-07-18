define(["jquery"], function($) {
  var onClick;
  return onClick = function(e) {
    if ($(e.selectorTarget).closest('.contentListItems__header').length) {
      $(e.selectorTarget).closest('.contentListItems').toggleClass('contentListItems_hide');
      return false;
    }
    if ($('.contentListItems__itemIcon_type_dropdown', e.currentTarget).length) {
      $(e.selectorTarget).toggleClass('contentListItems__itemIcon_display_show');
      $(e.selectorTarget).next().toggle();
      return false;
    }
  };
});
