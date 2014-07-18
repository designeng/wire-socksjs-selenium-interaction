define(["jquery"], function($) {
  var RegisterTemplateController;
  return RegisterTemplateController = (function() {
    function RegisterTemplateController() {}

    RegisterTemplateController.prototype.onReady = function() {
      var html, id, slotIds, _i, _len, _results;
      slotIds = this.slotIds;
      _results = [];
      for (_i = 0, _len = slotIds.length; _i < _len; _i++) {
        id = slotIds[_i];
        html = localStorage.getItem(id);
        if (html) {
          _results.push($(this.prospectView).find("#" + id).html(html));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    RegisterTemplateController.prototype.registerTemplateContent = function(slot, html) {
      var slotId;
      slotId = $(slot).attr("id");
      return localStorage.setItem(slotId, html);
    };

    return RegisterTemplateController;

  })();
});
