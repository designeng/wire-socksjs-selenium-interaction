define [
	"when"
	"jquery"
  "stupidError"
], (When, $) ->
    class RenderingController

        renderingDeferred: When.defer()

        onReady: () ->
            @renderingDeferred.resolve(@)

            # @listCollection.forEach (item) ->
            # 	console.log  item.port

           	setTimeout () =>
           		@listCollection.add {id: 10, port: "Lissabon"}

           	, 1000


        isReady: ->
            return @renderingDeferred.promise