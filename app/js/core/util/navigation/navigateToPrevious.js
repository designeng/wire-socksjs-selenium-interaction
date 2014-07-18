define(["underscore", "hasher", "navigate"], function(_, hasher, navigate) {
  var navigateToPrevious;
  return navigateToPrevious = function() {
    var routeAsArray;
    routeAsArray = hasher.getHashAsArray();
    routeAsArray.pop();
    if (_.last(routeAsArray) === "person") {
      routeAsArray.pop();
    }
    return navigate(routeAsArray.join("/"));
  };
});
