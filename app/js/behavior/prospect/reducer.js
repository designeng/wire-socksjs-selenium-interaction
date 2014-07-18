define(["jquery"], function($) {
  var addReducerTableClass, reducerClass, reducerTableClass, removeReducerTableClass;
  reducerClass = '.layoutPage__reducer';
  reducerTableClass = "layoutPage__reducer_table";
  addReducerTableClass = function() {
    return $(reducerClass).addClass(reducerTableClass);
  };
  removeReducerTableClass = function() {
    return $(reducerClass).removeClass(reducerTableClass);
  };
  return {
    addReducerTableClass: addReducerTableClass,
    removeReducerTableClass: removeReducerTableClass
  };
});
