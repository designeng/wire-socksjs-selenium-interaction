define [
	"jquery"
], ($) ->

	class RegisterTemplateController

		onReady: ->
			slotIds = @slotIds
			for id in slotIds
				html = localStorage.getItem id
				if html
					$(@prospectView).find("#" + id).html(html)


		registerTemplateContent: (slot, html) ->
			slotId = $(slot).attr("id")
			# directly to localStorage
			localStorage.setItem slotId, html