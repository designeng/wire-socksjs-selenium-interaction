define [
    # all behavior objects
    'behavior/prospect/shift'
], (shift) ->
    index = {
        # shift group
        shiftLeft           : shift.shiftLeft
        shiftCenter         : shift.shiftCenter
        shiftRight          : shift.shiftRight

        doSmth				: () ->
        	console.log "DO SOMETHING"
    }

    return index