const { createServer } = require("http")
const { createReadStream, writeFile } = require("fs")
const { join, extname } = require("path")

createServer(( req, res )=>{

    let store = "/Users/ntsikayomzingcakani/Desktop/WORK LOAD/Personal/Research/Just Looking/Hacking concepts/Test three/Storage/pic1.jpg"
    let path = join(__dirname, "docs", req.url === "/"?"index.html":req.url)
    let ext = extname(path)
    let content = "text/html"
    

    if(req.method == 'POST'){
        // console.log('POST')
        req.on('data', data=>{
            var binary =''
            var bytes = new Uint8Array(data)
            var len = bytes.byteLength
            for(var i = 0; i < len; i++)binary += String.fromCharCode(bytes[i])
            const image = 'data:image/jpeg;base64' + btoa(binary)
            writeFile(store, image, err=>console.error(err))
        })
    }else{
        switch(ext){
            case '.css':
                content = "text/css"
                break
            case '.js':
                content ="text/javascript"
                break
            case '.png':
                content = "image/png"
                break
            case '.jpg':
                content = "image/jpg"
                break
            case '.svg':
                content = "image/svg+xml"
                break
            default:
                content = "text/html"
                break
        }
    
        res.writeHead(200, {"Content-Type":content})
        createReadStream(path).pipe(res)
    }
}).listen(4444)