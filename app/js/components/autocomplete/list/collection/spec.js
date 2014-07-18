define(function() {
  return {
    $plugins: ['wire/on', 'wire/aop', 'cola'],
    $exports: {
      $ref: 'collection'
    },
    identifyByPort: {
      create: {
        module: 'cola/identifier/property',
        args: ['port']
      }
    },
    collection: {
      create: {
        module: 'cola/Collection',
        args: {
          identifier: {
            $ref: 'identifyByPort'
          }
        }
      },
      ready: {
        "addSource": {
          $ref: "source"
        }
      },
      afterReturning: {
        "add": "afterAdd"
      }
    },
    afterAdd: {
      module: 'components/autocomplete/list/collection/afterAdd'
    },
    source: {
      create: "components/autocomplete/list/collection/listCollectionSource"
    }
  };
});
