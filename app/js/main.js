require(["wire", "hasher", "wire!bootstrapSpec", "prospectSpec"], function(wire, hasher, bootstrapCTX, prospectSpec) {
  return bootstrapCTX.wire(prospectSpec).then(function(resultCTX) {
    hasher.prependHash = "";
    return hasher.init();
  });
});
