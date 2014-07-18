define(function() {
  return {
    $plugins: ["wire/debug"],
    reporter: {
      create: "specs/reporter/controller",
      properties: {
        specMainView: {
          $ref: 'specMainView'
        },
        slot: {
          $ref: 'slot'
        },
        templateController: {
          $ref: 'templateController'
        }
      },
      ready: {
        "sendViewReport": {}
      }
    }
  };
});
