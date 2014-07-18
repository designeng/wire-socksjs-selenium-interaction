define(function() {
  return {
    $plugins: ['wire/dom', 'wire/on', 'wire/dom/render'],
    prospectView: {
      render: {
        template: {
          module: "text!specs/prospect/complex/template/complex.html"
        },
        css: {
          module: "css!specs/prospect/complex/template/style.css"
        }
      },
      insert: {
        at: {
          $ref: 'slot'
        }
      }
    },
    renderingController: {
      create: "specs/prospect/common/controller",
      properties: {
        view: {
          $ref: "prospectView"
        }
      },
      ready: {
        "onReady": {}
      }
    },
    templateController: {
      create: "specs/prospect/complex/templateController",
      properties: {
        slotIds: ["pageLeft", "pageCenter", "pageRight"],
        prospectView: {
          $ref: 'prospectView'
        },
        slot: {
          $ref: 'slot'
        }
      },
      ready: {
        "onReady": {}
      }
    }
  };
});
