define(['behavior/prospect/shift'], function(shift) {
  var index;
  index = {
    shiftLeft: shift.shiftLeft,
    shiftCenter: shift.shiftCenter,
    shiftRight: shift.shiftRight,
    doSmth: function() {
      return console.log("DO SOMETHING");
    }
  };
  return index;
});
