# routeFilterStrategy
define [
    "underscore"
], (_) ->

    filterZipped = (memo, pair) ->

        first = pair[0]
        last  = pair[1]

        if _.isUndefined(first)
            return 0

        if first.match("\\{(.*)}") and !_.isUndefined last
            return 1

        if first != last 
            return 0
        else
            return 1

    # @param childRoutes {Object}
    routeFilterStrategy = (childRoutes, route, currentRoute) ->

        current = currentRoute.split("/")

        childRoutesKeys = _.keys childRoutes 

        for routeKey in childRoutesKeys
            splitted = routeKey.split("/")
            zipped = _.zip splitted, current

            # res in result will be 1 or 0
            # 1 - routeKey is matched to currentRoute, 0 - not matched
            res = _.reduce(zipped, filterZipped, 1)

            if res
                childRouteObject = childRoutes[routeKey]
                childRouteObject.route = routeKey
                return childRouteObject

        return undefined

    return routeFilterStrategy
