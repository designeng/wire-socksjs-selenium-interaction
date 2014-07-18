define(["underscore", "behavior/util/getStoragedObject", "core/util/navigation/getCurrentRoute", "core/util/config/getLocalizedName"], function(_, getStoragedObject, getCurrentRoute, getLocalizedName) {
  var PERSON_ID_KEY, getPerson, getPersonByPseudoRoute, getPersonCitizenship, getPersonId;
  PERSON_ID_KEY = "personId";
  getPersonByPseudoRoute = function(pseudoRoute) {
    var personId, personStoragedObject;
    personId = getPersonId(pseudoRoute, PERSON_ID_KEY);
    personStoragedObject = getStoragedObject("persons");
    return personStoragedObject[personId];
  };
  getPersonId = function(pseudoRoute) {
    var currentRoute, currentRouteFragments, first, last, matches, pair, pseudoRouteFragments, zipped, _i, _len;
    currentRoute = getCurrentRoute();
    pseudoRouteFragments = pseudoRoute.split("/");
    currentRouteFragments = currentRoute.split("/");
    if (currentRouteFragments[0] === "") {
      currentRouteFragments.shift();
    }
    zipped = _.zip(pseudoRouteFragments, currentRouteFragments);
    for (_i = 0, _len = zipped.length; _i < _len; _i++) {
      pair = zipped[_i];
      first = pair[0];
      last = pair[1];
      if (matches = first.match("\\{(.*)}")) {
        if (matches[1] === PERSON_ID_KEY) {
          return last;
        }
      }
    }
    return void 0;
  };
  getPersonCitizenship = function(id, type) {
    var country, countryList, dictionaryStorageObject, nameKey;
    dictionaryStorageObject = getStoragedObject("dictionary");
    countryList = dictionaryStorageObject[0].dictionary.country;
    country = _.where(countryList, {
      id: id
    })[0];
    nameKey = getLocalizedName();
    return country[nameKey];
  };
  getPerson = function(context, pseudoRoute) {
    var person;
    person = getPersonByPseudoRoute(pseudoRoute);
    person.citizenship = getPersonCitizenship(person.citizenship.id, person.citizenship.type);
    return context.personInfoController.setPerson(person);
  };
  return {
    getPerson: getPerson
  };
});
