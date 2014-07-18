define ["when"], (When) ->
    afterAdd = (promise) ->
        console.log  "___afterAdd", @, promise

        When(promise).then (item) ->
            console.log "__ITEM", item
