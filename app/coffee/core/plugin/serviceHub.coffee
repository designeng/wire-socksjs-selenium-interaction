define [
    "underscore"
    "when"
    "meld"
    "rest"
    "rest/interceptor/mime"
    "rest/interceptor/entity"
    "core/servicehub/serviceMap"
], (_, When, meld, rest, mime, entity, serviceMap) ->

    return (options) ->

        removers = []

        afterSendRequestAspect = (target) ->
            if target["afterSendRequest"]
                removers.push(meld.after target, "sendRequest", (resultEntityPromise) =>
                    When(resultEntityPromise).then (resultEntity) ->
                        target["afterSendRequest"].call(target, resultEntity))

        service = (facet, options, wire) ->
            target = facet.target
            services = facet.options

            if _.isArray services
                target.services = {}                
                target.client = rest.wrap(mime)
                                    .wrap(entity)

                target["sendRequestErrback"] = () ->
                    console.error 'response error: ', response

                target["sendRequest"] = (serviceName, data, method) ->
                    if @services[serviceName]
                        path = @services[serviceName].path
                    else
                        throw new Error("Not defined service '#{serviceName}' in target services!")

                    method = method || "GET"
                    data = data || {}

                    if !path
                        throw new Error("Path is not defined in service '#{serviceName}'!")

                    # all is fine
                    defered = When.defer()
                    @client({ path: path, data: data, method: method}).then(
                        (response) ->
                            defered.resolve(response)
                        , target["sendRequestErrback"]
                    )
                    return defered.promise

                afterSendRequestAspect(target)

                _.bindAll target, "sendRequest"

                for serv in services
                    if serviceMap[serv]
                        target.services[serv] = serviceMap[serv]

                    # TODO: return this error to promise reject
                    else
                        throw new Error("Service is not defined! - " + serv)
            else 
                _.isString services


        bindToServiceFacet = (resolver, facet, wire) ->
            resolver.resolve(service(facet, options, wire))

        facets: 
            bindToService: 
                ready: bindToServiceFacet
                destroy: (resolver, proxy, wire) ->
                    for remover in removers
                        remover.remove()
