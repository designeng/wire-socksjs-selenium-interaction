define [
    "hasher"
], (hasher) ->
    navigate = (route, mode, tail) ->
        if !mode
            hasher.setHash route
        else if mode is "add" and tail            
            if route is "current"
                currentHash = hasher.getHash()
                hasher.setHash(currentHash + "/" + tail)
            else
                hasher.setHash(route + "/" + tail)
