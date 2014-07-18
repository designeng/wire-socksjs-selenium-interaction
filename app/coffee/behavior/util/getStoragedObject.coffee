define ->
    getStoragedObject = (storageName) ->
        storagedObject = JSON.parse(localStorage.getItem(storageName))
        return storagedObject 