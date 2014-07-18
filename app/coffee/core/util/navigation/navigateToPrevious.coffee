define [
    "underscore"
    "hasher"
    "navigate"
], (_, hasher, navigate) -> 
    navigateToPrevious = () ->
        routeAsArray = hasher.getHashAsArray()
        # first is blank (""), so remove it first
        # routeAsArray.shift()
        routeAsArray.pop()

        # TODO: make it more flexible! Maybe we must to check if previous route is sensible 
        if _.last(routeAsArray) is "person"
            routeAsArray.pop()

        navigate(routeAsArray.join("/"))