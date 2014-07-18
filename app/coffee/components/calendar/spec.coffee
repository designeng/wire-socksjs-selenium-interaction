# calendar spec
define ->

    $plugins: [
        'wire/on'
        'wire/dom'
        'wire/dom/render'
    ]


    calendarView:
        render:
            template:
                module: "text!components/calendar/template.html"
        insert:
            at: {$ref: 'slot'}