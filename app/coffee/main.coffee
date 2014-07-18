# it works with contextRouter

require [
    "wire"
    "hasher"
    "wire!bootstrapSpec"
    "prospectSpec"
], (wire, hasher, bootstrapCTX, prospectSpec) ->

    bootstrapCTX.wire(
        prospectSpec
    ).then (resultCTX) ->
        hasher.prependHash = ""
        hasher.init()