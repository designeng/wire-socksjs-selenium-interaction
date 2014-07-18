
define [
    'jquery'
], ($) ->

    return (options) ->

        doAfterBind = (facet, options, wire) ->
            target = facet.target
            

        afterBindFunc = (resolver, facet, wire) ->
            resolver.resolve(doAfterBind(facet, options, wire))


        pluginInstance = 
            facets:
                afterBind:
                    'ready': afterBindFunc

        return pluginInstance