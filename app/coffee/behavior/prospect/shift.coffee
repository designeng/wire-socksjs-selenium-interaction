define [
    "jquery"
    "core/util/navigation/navigateToPrevious"
], ($, navigateToPrevious) ->

    wrapperClass = '.layoutContent__slotWrapper'
    slotSideCenterClass  = '.layoutContent__slot_side_center'
    controlShowLeftClass = '.layoutContent__show_left'
    controlShowRightClass= '.layoutContent__show_right'
    showSlotPartClass = 'layoutContent__slotWrapper_show_'

    shiftRight = () ->
        $(wrapperClass).addClass("layoutContent__slotWrapper_show_right")
        addBackNavigation()

    shiftLeft = () ->
        $(wrapperClass).addClass("layoutContent__slotWrapper_show_left")
        addBackNavigation()

    shiftCenter = () ->
        $(wrapperClass).removeClass("layoutContent__slotWrapper_show_left layoutContent__slotWrapper_show_right")
        removeBackNavigation()

    # TODO: can be plugined? ($.fn)
    addBackNavigation = () ->
        $(slotSideCenterClass).one "click", () ->
            navigateToPrevious()

    # TODO: can be plugined? ($.fn)
    removeBackNavigation = () ->
        $(slotSideCenterClass).off "click"

    return {
        shiftRight: shiftRight
        shiftLeft: shiftLeft
        shiftCenter: shiftCenter
    }