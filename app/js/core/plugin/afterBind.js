define(['jquery'], function($) {
  return function(options) {
    var afterBindFunc, doAfterBind, pluginInstance;
    doAfterBind = function(facet, options, wire) {
      var target;
      return target = facet.target;
    };
    afterBindFunc = function(resolver, facet, wire) {
      return resolver.resolve(doAfterBind(facet, options, wire));
    };
    pluginInstance = {
      facets: {
        afterBind: {
          'ready': afterBindFunc
        }
      }
    };
    return pluginInstance;
  };
});
