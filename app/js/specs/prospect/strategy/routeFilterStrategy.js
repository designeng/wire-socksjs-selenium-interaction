define(["underscore"], function(_) {
  var filterZipped, routeFilterStrategy;
  filterZipped = function(memo, pair) {
    var first, last;
    first = pair[0];
    last = pair[1];
    if (_.isUndefined(first)) {
      return 0;
    }
    if (first.match("\\{(.*)}") && !_.isUndefined(last)) {
      return 1;
    }
    if (first !== last) {
      return 0;
    } else {
      return 1;
    }
  };
  routeFilterStrategy = function(childRoutes, route, currentRoute) {
    var childRouteObject, childRoutesKeys, current, res, routeKey, splitted, zipped, _i, _len;
    current = currentRoute.split("/");
    childRoutesKeys = _.keys(childRoutes);
    for (_i = 0, _len = childRoutesKeys.length; _i < _len; _i++) {
      routeKey = childRoutesKeys[_i];
      splitted = routeKey.split("/");
      zipped = _.zip(splitted, current);
      res = _.reduce(zipped, filterZipped, 1);
      if (res) {
        childRouteObject = childRoutes[routeKey];
        childRouteObject.route = routeKey;
        return childRouteObject;
      }
    }
    return void 0;
  };
  return routeFilterStrategy;
});
