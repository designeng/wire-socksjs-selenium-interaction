define(["jquery", "core/util/navigation/navigateToPrevious"], function($, navigateToPrevious) {
  var addBackNavigation, controlShowLeftClass, controlShowRightClass, removeBackNavigation, shiftCenter, shiftLeft, shiftRight, showSlotPartClass, slotSideCenterClass, wrapperClass;
  wrapperClass = '.layoutContent__slotWrapper';
  slotSideCenterClass = '.layoutContent__slot_side_center';
  controlShowLeftClass = '.layoutContent__show_left';
  controlShowRightClass = '.layoutContent__show_right';
  showSlotPartClass = 'layoutContent__slotWrapper_show_';
  shiftRight = function() {
    $(wrapperClass).addClass("layoutContent__slotWrapper_show_right");
    return addBackNavigation();
  };
  shiftLeft = function() {
    $(wrapperClass).addClass("layoutContent__slotWrapper_show_left");
    return addBackNavigation();
  };
  shiftCenter = function() {
    $(wrapperClass).removeClass("layoutContent__slotWrapper_show_left layoutContent__slotWrapper_show_right");
    return removeBackNavigation();
  };
  addBackNavigation = function() {
    return $(slotSideCenterClass).one("click", function() {
      return navigateToPrevious();
    });
  };
  removeBackNavigation = function() {
    return $(slotSideCenterClass).off("click");
  };
  return {
    shiftRight: shiftRight,
    shiftLeft: shiftLeft,
    shiftCenter: shiftCenter
  };
});
