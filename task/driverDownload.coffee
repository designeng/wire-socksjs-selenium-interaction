assert  = require('assert')
http    = require('http')
fs    = require('fs')
subprocess = require('child_process')
unzip = require('unzip')

module.exports = (grunt) ->

    grunt.task.registerTask "driverDownload", "chrome driver download", () ->

        msiName = "DOWNLOADED.zip"

        msiUrl =
            host: 'localhost'
            port: 7788
            path: '/download/app.zip'

        http.get( msiUrl, (res) ->

            console.log "START"

            if res.statusCode != 200
                console.log "Unable to download..... "
                process.exit(1)

            msiLength = parseInt(res.headers['content-length'])

            console.log "msiLength:::", msiLength

            # arbitrary length to verify that we aren't too large
            assert( msiLength < 1000000 )

            msi = new Buffer( msiLength )
            msiSoFar = 0

            res.on 'data', ( chunk ) ->

                console.log "DATA:::"

                if msiSoFar + chunk.length > msi.length
                    console.log "Error downloading "
                    process.exit(1)

                chunk.copy( msi, msiSoFar )
                msiSoFar += chunk.length

            res.on 'end', () ->

                console.log "onEnd:::"

                if msiSoFar != msi.length
                    console.log "Error downloading "
                    process.exit(1)

                msiFile = fs.openSync( msiName, 'w')
                len = fs.writeSync( msiFile, msi, 0, msi.length, 0 )
                if len != msi.length

                    console.log "Error writing the msi to a file"
                    process.exit(1)

                fs.closeSync( msiFile )

                fs.createReadStream('DOWNLOADED.zip').pipe unzip.Extract
                    path: 'result'

                
        ).on 'error',  ( err ) ->
            console.log ( err )