define(["hasher"], function(hasher) {
  var navigate;
  return navigate = function(route, mode, tail) {
    var currentHash;
    if (!mode) {
      return hasher.setHash(route);
    } else if (mode === "add" && tail) {
      if (route === "current") {
        currentHash = hasher.getHash();
        return hasher.setHash(currentHash + "/" + tail);
      } else {
        return hasher.setHash(route + "/" + tail);
      }
    }
  };
});
