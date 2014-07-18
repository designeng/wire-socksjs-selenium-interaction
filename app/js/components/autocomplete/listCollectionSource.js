define(['cola/adapter/Array', 'rest', 'rest/interceptor/mime', 'rest/interceptor/entity', 'when'], function(ArrayAdapter, rest, mime, entity, When) {
  var client, serviceDefered;
  serviceDefered = When.defer();
  client = rest.chain(mime);
  client = rest.chain(entity);
  client({
    path: '/service/autocomplete'
  }).then(function(response) {
    var source;
    console.log("___response", response);
    source = new ArrayAdapter(response.airports);
    return serviceDefered.resolve(source);
  }, function(error) {
    return console.log("SERVICE ERROR:", error);
  });
  return serviceDefered.promise;
});
