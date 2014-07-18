define(["when"], function(When) {
  var afterAdd;
  return afterAdd = function(promise) {
    console.log("___afterAdd", this, promise);
    return When(promise).then(function(item) {
      return console.log("__ITEM", item);
    });
  };
});
