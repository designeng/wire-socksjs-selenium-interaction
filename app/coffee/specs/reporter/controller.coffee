define [
	"jquery"
], ($) ->
	class ReporterController

		sendViewReport: ->
			slot = @slot
			html = $(@specMainView).html()
			@templateController.registerTemplateContent(slot, html)