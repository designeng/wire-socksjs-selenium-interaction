define ->

    $plugins: [
        'wire/dom'
        'wire/dom/render'
    ]

    prospectView:
        render:
            template:
                module: "text!specs/prospect/plain/template/plain.html"

        insert:
            at: {$ref: 'slot'}

    renderingController:
        create: "specs/prospect/common/controller"
        properties:
            view: {$ref: "prospectView"}
        ready:
            "onReady": {}