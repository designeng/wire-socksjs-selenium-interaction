define [
    "moment"
    'cola/adapter/Array'
], (moment, ArrayAdapter) ->

    # first day of month in week grid
    # it must be changed on not current month
    num = moment().startOf('month').day()
    # need to add blank tags
    blankCount = num - 1

    daysInMonth = moment().daysInMonth()
    year = moment().format("YYYY")
    month = moment().format("MM")

    days = []
    while blankCount
        days.push {id: -blankCount, day: "-"}
        blankCount--

    i = 1
    while i <= daysInMonth
        
        if (days.length % 7)
            end = " weekend"
        else
            end = ""

        days.push {id: moment("#{year}-#{month}-#{i}", "YYYY-MM-D").unix() + end, day: i}
        i++

    source = new ArrayAdapter(days)

    return source