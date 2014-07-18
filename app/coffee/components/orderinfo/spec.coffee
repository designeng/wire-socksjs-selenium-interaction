define ->

	$plugins: [
        'logger'
        'wire/debug'
        'wire/on'
        'wire/aop'
        'wire/dom'
        'wire/dom/render'
        'cola'
    ]

    specMainView:
        render:
            template:
                module: "text!components/orderinfo/template.html"
            css:
                module: "css!components/orderinfo/style.css"
        insert:
            at: {$ref: 'slot'}

        bind:
            to:
                $ref: 'listCollection'
            bindings:
                port: '.port'

    controller:
        create: "components/orderinfo/controller"
        properties:
            view: {$ref: 'specMainView'}
            listCollection: {$ref: 'listCollection'}
            slot: {$ref: 'slot'}
        ready:
            "onReady": {}

    listCollection:
        create: "cola/Collection"
        ready: 
            "addSource": {$ref: 'source'}

    source:
        create: "components/orderinfo/source"

