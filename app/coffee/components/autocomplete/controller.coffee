define ->
    class AutoCompleteController

        # @injected
        input: undefined

        # @injected
        list: undefined

        # @injected
        listCollection: undefined

        onReady: ->
            console.log "__@listCollection"

            # setTimeout(()=>
            #     @listCollection.adapters[1].onAdd = (item) ->
            #         console.log "ADDED", item
            # , 1000)
            

        onItemClick: (item) ->
            console.log "____click"


        onTextInputKeyUp: (e) ->
            console.log "_____ONKEYUP", @listCollection.adapters[0]._index,  @listCollection.adapters

            @listCollection.add {port: e.target.value}

        afterAdd: (item) ->
            console.log "__@listCollection afterAdd", item