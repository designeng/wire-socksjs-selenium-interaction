define(function() {
  var getStoragedObject;
  return getStoragedObject = function(storageName) {
    var storagedObject;
    storagedObject = JSON.parse(localStorage.getItem(storageName));
    return storagedObject;
  };
});
