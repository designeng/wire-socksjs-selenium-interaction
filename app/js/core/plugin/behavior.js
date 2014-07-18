define(['behavior/index'], function(behavior) {
  return function(options) {
    var createResolver, pluginInstance, resolveBehavior, resolvers, trim;
    trim = function(str) {
      return str.replace(/^\s+|\s+$/g, '');
    };
    resolveBehavior = function(resolver, name, refObj, wire) {
      var funcs, names, _i, _len;
      funcs = [];
      if (name.indexOf(",") !== -1) {
        names = name.split(",");
        for (_i = 0, _len = names.length; _i < _len; _i++) {
          name = names[_i];
          name = trim(name);
          funcs.push(behavior[name]);
        }
      } else {
        name = trim(name);
        funcs.push(behavior[name]);
      }
      return resolver.resolve(funcs);
    };
    createResolver = function(resolverFunc, options) {
      return function(resolver, name, refObj, wire) {
        return resolverFunc(resolver, name, refObj, wire);
      };
    };
    resolvers = {};
    resolvers.behavior = createResolver(resolveBehavior, options);
    pluginInstance = {
      resolvers: resolvers
    };
    return pluginInstance;
  };
});
